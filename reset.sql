DELETE FROM products *;
ALTER SEQUENCE products_id_seq RESTART;
DELETE FROM orders *;
ALTER SEQUENCE orders_id_seq RESTART;
DELETE FROM customer_favorite_products *;
ALTER SEQUENCE customer_favorite_products_id_seq RESTART;
DELETE FROM customers *;
ALTER SEQUENCE customers_id_seq RESTART;
DELETE FROM brands *;
ALTER SEQUENCE brands_id_seq RESTART;
DELETE FROM products_category *;
ALTER SEQUENCE products_category_id_seq RESTART;