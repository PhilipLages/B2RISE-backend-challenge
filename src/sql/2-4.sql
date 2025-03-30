SELECT c.name, SUM(o.total) AS total_spent
FROM customers c
JOIN orders o ON c.id = o.customer_id
WHERE o.total > 0
GROUP BY c.id
ORDER BY total_spent DESC;
