UPDATE list
SET item = $2
WHERE itemid = $1;

SELECT * 
FROM list
ORDER BY itemid ASC;