--
-- PostgreSQL database dump
--

-- Dumped from database version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
ALTER TABLE ONLY public.carts DROP CONSTRAINT carts_pkey;
ALTER TABLE ONLY public."cartItems" DROP CONSTRAINT "cartItems_pkey";
ALTER TABLE public.products ALTER COLUMN "productId" DROP DEFAULT;
ALTER TABLE public.orders ALTER COLUMN "orderId" DROP DEFAULT;
ALTER TABLE public.carts ALTER COLUMN "cartId" DROP DEFAULT;
ALTER TABLE public."cartItems" ALTER COLUMN "cartItemId" DROP DEFAULT;
DROP SEQUENCE public."products_productId_seq";
DROP TABLE public.products;
DROP SEQUENCE public."orders_orderId_seq";
DROP TABLE public.orders;
DROP SEQUENCE public."carts_cartId_seq";
DROP TABLE public.carts;
DROP SEQUENCE public."cartItems_cartItemId_seq";
DROP TABLE public."cartItems";
DROP EXTENSION plpgsql;
DROP SCHEMA public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: cartItems; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."cartItems" (
    "cartItemId" integer NOT NULL,
    "cartId" integer NOT NULL,
    "productId" integer NOT NULL,
    price integer NOT NULL
);


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."cartItems_cartItemId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."cartItems_cartItemId_seq" OWNED BY public."cartItems"."cartItemId";


--
-- Name: carts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.carts (
    "cartId" integer NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: carts_cartId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."carts_cartId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: carts_cartId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."carts_cartId_seq" OWNED BY public.carts."cartId";


--
-- Name: orders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orders (
    "orderId" integer NOT NULL,
    "cartId" integer NOT NULL,
    name text NOT NULL,
    "creditCard" text NOT NULL,
    "shippingAddress" text NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: orders_orderId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."orders_orderId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: orders_orderId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."orders_orderId_seq" OWNED BY public.orders."orderId";


--
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    "productId" integer NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    image text NOT NULL,
    "shortDescription" text NOT NULL,
    "longDescription" text NOT NULL
);


--
-- Name: products_productId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."products_productId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: products_productId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."products_productId_seq" OWNED BY public.products."productId";


--
-- Name: cartItems cartItemId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems" ALTER COLUMN "cartItemId" SET DEFAULT nextval('public."cartItems_cartItemId_seq"'::regclass);


--
-- Name: carts cartId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts ALTER COLUMN "cartId" SET DEFAULT nextval('public."carts_cartId_seq"'::regclass);


--
-- Name: orders orderId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders ALTER COLUMN "orderId" SET DEFAULT nextval('public."orders_orderId_seq"'::regclass);


--
-- Name: products productId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN "productId" SET DEFAULT nextval('public."products_productId_seq"'::regclass);


--
-- Data for Name: cartItems; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."cartItems" ("cartItemId", "cartId", "productId", price) FROM stdin;
1	32	1	2999
2	33	1	2999
3	34	1	2999
4	35	1	2999
5	36	1	2999
6	37	1	2999
7	38	1	2999
8	39	1	2999
9	40	1	2999
10	43	1	2999
11	44	1	2999
12	45	1	2999
13	46	1	2999
14	47	1	2999
15	48	1	2999
16	49	1	2999
17	50	1	2999
18	51	1	2999
19	52	1	2999
20	53	1	2999
21	54	3	2900
22	55	4	999
23	56	5	9900
24	56	4	999
25	56	3	2900
26	57	1	2999
27	57	2	2595
28	57	3	2900
29	57	5	9900
30	58	1	2999
31	57	2	2595
32	59	6	830
33	60	1	2999
34	61	1	2999
35	62	1	2999
36	62	2	2595
37	63	2	2595
38	64	1	2999
39	64	6	830
40	65	2	4400
41	65	2	4400
42	65	2	4400
43	65	2	4400
44	66	2	4400
45	67	2	4400
46	68	1	4400
65	73	1	4400
67	73	2	4400
69	74	3	5000
70	75	3	5000
71	76	2	4400
\.


--
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.carts ("cartId", "createdAt") FROM stdin;
1	2020-04-25 21:54:29.317267-07
2	2020-04-25 21:58:42.180859-07
3	2020-04-25 22:02:03.54058-07
4	2020-04-26 00:20:39.632484-07
5	2020-04-26 00:24:09.908162-07
6	2020-04-26 00:30:42.713834-07
7	2020-04-26 00:30:53.874148-07
8	2020-04-26 00:31:31.773987-07
9	2020-04-26 00:32:11.349543-07
10	2020-04-26 00:33:45.043753-07
11	2020-04-26 00:35:58.093891-07
12	2020-04-26 00:38:11.049349-07
13	2020-04-26 00:38:42.021765-07
14	2020-04-26 00:39:06.565928-07
15	2020-04-26 00:50:32.643388-07
16	2020-04-26 00:51:24.978989-07
17	2020-04-26 00:51:53.582658-07
18	2020-04-26 00:53:01.711861-07
19	2020-04-26 00:53:30.768522-07
20	2020-04-26 00:54:29.583122-07
21	2020-04-26 00:54:48.053236-07
22	2020-04-26 00:55:05.943736-07
23	2020-04-26 00:55:25.065902-07
24	2020-04-26 00:55:48.580327-07
25	2020-04-26 00:56:24.537043-07
26	2020-04-26 00:56:34.337939-07
27	2020-04-26 00:56:54.430222-07
28	2020-04-26 00:57:21.531306-07
29	2020-04-26 01:04:43.553192-07
30	2020-04-26 01:05:55.990226-07
31	2020-04-26 01:08:09.7054-07
32	2020-04-26 01:19:00.7776-07
33	2020-04-26 01:20:08.454915-07
34	2020-04-26 01:20:52.34637-07
35	2020-04-26 01:21:29.08473-07
36	2020-04-26 01:23:20.85343-07
37	2020-04-26 01:23:43.634473-07
38	2020-04-26 01:24:46.540381-07
39	2020-04-26 01:25:26.333752-07
40	2020-04-26 01:26:38.17396-07
41	2020-04-26 01:27:27.270372-07
42	2020-04-26 01:28:05.746511-07
43	2020-04-26 01:28:56.564621-07
44	2020-04-26 01:38:29.213038-07
45	2020-04-26 01:39:32.706466-07
46	2020-04-26 01:40:11.66436-07
47	2020-04-26 01:40:55.525778-07
48	2020-04-26 01:44:16.477458-07
49	2020-04-26 01:44:47.682958-07
50	2020-04-26 01:45:27.346577-07
51	2020-04-26 01:53:47.323124-07
52	2020-04-26 01:54:15.303636-07
53	2020-04-26 02:00:14.325954-07
54	2020-04-26 02:00:52.529371-07
55	2020-04-26 02:02:06.60051-07
56	2020-04-26 02:02:48.101217-07
57	2020-04-26 12:47:06.20391-07
58	2020-04-26 20:18:42.402355-07
59	2020-04-26 22:30:35.804166-07
60	2020-04-26 22:40:45.034326-07
61	2020-04-27 11:27:42.262077-07
62	2020-05-18 18:36:29.79277-07
63	2020-05-18 18:47:44.944166-07
64	2020-05-20 13:09:37.021947-07
65	2020-06-16 19:02:02.755453-07
66	2020-06-17 16:09:55.094611-07
67	2020-06-17 16:10:53.239066-07
68	2020-06-21 21:47:55.904014-07
69	2020-06-21 22:25:40.905425-07
70	2020-06-22 12:30:32.533795-07
71	2020-06-22 16:35:07.903688-07
72	2020-06-23 14:54:21.901983-07
73	2020-06-24 14:38:29.196839-07
74	2020-06-24 23:39:38.760607-07
75	2020-06-25 12:34:08.067249-07
76	2020-06-25 15:02:44.357476-07
77	2020-06-25 15:54:14.667731-07
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.orders ("orderId", "cartId", name, "creditCard", "shippingAddress", "createdAt") FROM stdin;
2	58	Kushol Huq	12345678910111213	111 Example Street	2020-04-26 20:18:51.056766-07
3	57	kushol	12345678910111213	97 cool drive boulevard	2020-04-26 22:20:13.145892-07
4	59	kusholhuq	12345678910111213	111 cool street	2020-04-26 22:31:06.653676-07
5	60	kusholhuq	1234567890123455	11111 drdrdrd drdr	2020-04-26 22:41:06.034619-07
6	61	fsdfdsfdsf	12312312312313213213123	1111 fdfsfds	2020-04-27 11:27:56.840982-07
7	62	kusholhuq	1234567891012121314	97 cool street	2020-05-18 18:36:52.916075-07
8	64	kusholhuq	1234567890123456	dfs	2020-05-20 15:28:06.483555-07
9	66	fdsafdsfsd	1111111111111111111111111111	sfdsfs	2020-06-17 16:10:28.903246-07
10	73	fdsfdsfdsfs	1111111111111111111111111111	dsfdsf	2020-06-24 23:38:15.180338-07
11	75	Mohsinul Huq	1234567890123456	97 Promenade	2020-06-25 14:59:25.660411-07
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.products ("productId", name, price, image, "shortDescription", "longDescription") FROM stdin;
1	The Soul of Nibelheim	4400	/images/cloud.jpg	Black silhouette of the soul of Nibelheim	Cloud Strife is the main protagonist in Final Fantasy VII, Final Fantasy VII Remake, and Final Fantasy VII: Advent Children. He also appears in the spin-off games of the Compilation of Final Fantasy VII, including Dirge of Cerberus -Final Fantasy VII- and Crisis Core -Final Fantasy VII-, as a supporting character.
2	Soul Of The Energy Wave	4400	/images/goku.jpg	Black silhouette of the energy wave unleashed by Goku. 	Goku the main protagonist and hero of the Dragon Ball manga series and animated television series created by Akira Toriyama. He is one of the survivors of the extinct Saiyan race. He was sent as a baby to planet Earth in order to destroy it. When he arrived he was a violent kid, due to his warrior nature. However, he suffered an accident which made him lose his memory. He became a kind and calm kid. Trained, he became a talented martial artist and worlds greatest defender.
3	Soul Of The Red Plumber	5000	/images/mario.jpg	Black silhouette inspired by the Red Plumber, Mario. 	Mario is the main character and protagonist of the long-running and highly successful Mario franchise. He was created by Japanese video game designer Shigeru Miyamoto and serves as the main mascot of Nintendo. Mario made his first appearance as the protagonist of the arcade game Donkey Kong, released in 1981. Since Super Mario Bros., his trademark abilities have been his jumping and stomping powers, with which he defeats most of his enemies, and his ability to gain powers with a plethora of items, such as the Super Mushroom, the Fire Flower, and the Super Star.
4	Soul Of The Chosen Demon	5500	/images/nezuko.jpg	Black silhouette of the chosen demon, Nezuko. 	Nezuko Kamado (竈門かまど禰ね豆ず子こ Kamado Nezuko?) is the younger sister of Tanjiro Kamado and one of the two remaining members of the Kamado family. Formerly human, she was attacked and turned into a Demon by Muzan Kibutsuji. She is one of the main protagonists of Demon Slayer: Kimetsu no Yaiba.
5	Soul Of The Space Cowboy	5200	/images/cowboy.jpg	Black silhouette of the Space Cowboy, Spike. 	Spike Spiegel (スパイク・スピーゲル Supaiku Supīgeru?) is a former member of the Red Dragon Crime Syndicate, who left by faking his death after falling in love with a woman called Julia. He then became a bounty hunter and the partner of Jet Black, the captain of the Bebop. Spike and Jet pursued criminals across the populated planets and moons of the solar system. His ship was the Swordfish II.
6	Soul Of The Waterbender	4600	/images/kitara.webp	Black silhouette of the Waterbender, Katara. 	Katara is a fifteen-year-old waterbender who, like her older brother Sokka, was born and raised in the Southern Water Tribe by her grandmother, Kanna, prior to the life of her mother being taken during a Fire Nation raid. Katara was the last waterbender in her tribe. She and her brother Sokka found an airbender named Aang who later is revealed as the Avatar. She and Sokka accompany him on his journey to master the remaining three elements: water, earth, and fire.
\.


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."cartItems_cartItemId_seq"', 73, true);


--
-- Name: carts_cartId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."carts_cartId_seq"', 77, true);


--
-- Name: orders_orderId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."orders_orderId_seq"', 11, true);


--
-- Name: products_productId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."products_productId_seq"', 1, false);


--
-- Name: cartItems cartItems_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems"
    ADD CONSTRAINT "cartItems_pkey" PRIMARY KEY ("cartItemId");


--
-- Name: carts carts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY ("cartId");


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY ("orderId");


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY ("productId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

