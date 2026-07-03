CREATE DATABASE CustomerDB;

USE CustomerDB;

CREATE TABLE Customer(
    CustomerID INT PRIMARY KEY,
    CustomerName VARCHAR(50),
    City VARCHAR(30),
    Age INT
);

INSERT INTO Customer VALUES
(101,'Shruti','Bhopal',20),
(102,'Rahul','Indore',22),
(103,'Priya','Delhi',21),
(104,'Aman','Pune',23),
(105,'Neha','Mumbai',20);

UPDATE Customer
SET City = 'Delhi'
WHERE CustomerID = 102;

DELETE FROM Customer
WHERE CustomerID = 105;

SELECT *
FROM Customer
ORDER BY CustomerName ASC;

-- Remove all records from the table
TRUNCATE TABLE Customer;

-- Check the table
SELECT * FROM Customer;