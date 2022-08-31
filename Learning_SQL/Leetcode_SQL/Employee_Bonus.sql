/* Write your T-SQL query statement below */
SELECT e.name, b.bonus
FROM Employee E
LEFT OUTER JOIN Bonus B
ON E.empId = B.empId
where B.bonus < 1000 or B.bonus is null
