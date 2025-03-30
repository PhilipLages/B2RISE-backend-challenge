SELECT 
  c.name AS category_name, 
  p.name AS product_name, 
  SUM(s.quantity) AS total_sales
FROM sales s
JOIN products p ON s.product_id = p.id
JOIN categories c ON p.category_id = c.id
GROUP BY c.name, p.name
HAVING SUM(s.quantity) > 100