/* Write your T-SQL query statement below */
SELECT
--P.personId,
--A.personId,
--A.addressId,
P.firstName,
P.lastName,
A.city,
A.state
from Person P
LEFT OUTER JOIN Address A
ON P.personId = A.personId
