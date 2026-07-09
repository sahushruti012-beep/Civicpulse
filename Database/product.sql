CREATE DATABASE Store;

USE Store;

CREATE TABLE Product(
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(50),
    Category VARCHAR(30),
    Price INT
);

INSERT INTO Product VALUES
(101,'Laptop','Electronics',55000),
(102,'Mouse','Electronics',800),
(103,'Keyboard','Electronics',1500),
(104,'Chair','Furniture',3500),
(105,'Table','Furniture',6000);

SELECT *
FROM Product
WHERE Price > 1000
ORDER BY Price ASC;