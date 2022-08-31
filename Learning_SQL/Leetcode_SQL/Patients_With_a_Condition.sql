/* Write your T-SQL query statement below */
SELECT patient_id, patient_name, conditions
FROM PATIENTS
CROSS APPLY STRING_SPLIT(CONDITIONS, ' ')
WHERE VALUE like 'DIAB1%'
