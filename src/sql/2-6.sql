CREATE VIEW monthly_summary AS
SELECT 
  t.account_id, 
  MONTH(t.transaction_date) AS month, 
  SUM(t.amount) AS total_transactions
FROM transactions t
GROUP BY t.account_id, MONTH(t.transaction_date)

-- Select from the view
SELECT * FROM monthly_summary
WHERE total_transactions > 10000;
