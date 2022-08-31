/* Write your T-SQL query statement below */
SELECT B.ID
FROM WEATHER A
INNER JOIN
WEATHER B
ON DATEDIFF(DAY, A.recordDate, B.recordDate) = 1
AND B.TEMPERATURE > A.TEMPERATURE
