/* Write your T-SQL query statement below */
--USING COMMON TABLE EXPRESSION
--RETURN DISTINCT RESULT SET FOR LATER USE
WITH TEMP AS (
    SELECT DISTINCT * FROM Activities
)
--SELECT SELL DATE, COUNT BY SELL DATE, AND A LIST OF PRODUCTS
--FROM THE TEMP TABLE CREATED PREVIOUSLY
SELECT sell_date
,COUNT(sell_date) AS num_sold
,string_agg(product, ',')
WITHIN GROUP ( ORDER BY product ASC) AS products
from TEMP
group by sell_date
order by sell_date asc
