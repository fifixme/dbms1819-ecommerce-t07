var Brand = {
  list: (client, filter, callback) => {
    const brandListQuery = 'SELECT categories.id AS category_id, categories.category_name AS category_name FROM categories';
    client.query(brandListQuery, (req, data) => {
      callback(data.rows);
    });
  },
  mostOrderedBrand: (client, filter, callback) => {
    const query =  `
          SELECT brands.brand_name AS brand_name,
          ROW_NUMBER() OVER (ORDER BY SUM(orders.quantity) DESC) AS ROW,
          SUM(orders.quantity) as total
          FROM orders
          INNER JOIN products ON orders.product_id=products.id
          INNER JOIN brands
          ON products.brand_id=brands.id
          GROUP BY brand_name
          ORDER BY SUM(orders.quantity) DESC
          LIMIT 3;
      `;
      client.query(query, (req, result) => {
        callback(result.rows)
      });
  }
};

module.exports = Brand;