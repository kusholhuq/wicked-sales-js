require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/products', (req, res, next) => {
  const sql = `
  select "productId","name", "price","image","shortDescription"
  from "products";
  `;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.status(200).json(grades);
    })
    .catch(err => next(err));
});

app.get('/api/products/:productId', (req, res, next) => {
  const { productId } = req.params;
  const sql = `
  select *
  from "products"
  where "productId"=$1;`;
  const params = [productId];
  db.query(sql, params)
    .then(result => {
      const product = result.rows[0];
      if (!product) {
        next(new ClientError(`cannot find the product with productId ${productId}`, 404));
      } else { res.status(200).json(product); }

    })
    .catch(err => {
      next(err);
    });
});

app.get('/api/cart', (req, res, next) => {
  const sql = `
  select *
  from "cartItems";
  `;
  db.query(sql)
    .then(result => {
      const itemsArray = result.rows;
      res.status(200).json(itemsArray);
    })
    .catch(err => next(err));
});

app.post('/api/cart', (req, res, next) => {
  // const { productId } = req.body;
  if (!parseInt(req.body.productId, 10)) {
    return res.status(400).json({
      error: 'productId must be a positive integer'
    });
  }
  const params = [req.body.productId];
  const sql = `
  select "price"
  from "products"
  where "productId" = $1;`;

  db.query(sql, params)
    .then(result => {
      const price = result.rows[0];
      // console.log('price:', price);
      if (!price) {
        throw new ClientError(`Cannot find price of product with productId: ${req.body.productId}`, 400);
      }
      const sql2 = `
      insert into "carts" ("cartId", "createdAt")
      values (default, default)
      returning "cartId";
      `;
      return (db.query(sql2)
        .then(answer => {
          // console.log('answer:', answer, answer.rows[0]);
          res.json({ cartId: answer.rows[0].cartId, price: price.price });
          return ({ cartId: answer.rows[0].cartId, price: price.price });
        }));
    })
    .then(result2 => {
      console.log('result2: ', result2);
      req.session.cartId = result2.cartId;
      const sql3 = `
      insert into "cartItems" ("cartId", "productId", "price")
      values ($1, $2, $3)
      returning "cartItemId";
      `;
      const params = [result2.cartId, parseInt(req.body.productId), result2.price];
      console.log('params', params);
      return (db.query(sql3, params)
        .then(answer2 => {
          console.log('answer2', result.rows[0]);
          // res.json({ cartItemId: answer2.rows[0] });
          // return ({ cartItemId: answer2.rows[0] });
        }));

    })
    .then(result3 => {
      console.log('result3:', result3);
    })
    .catch();

});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
