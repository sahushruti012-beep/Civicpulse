-- Create Database
CREATE DATABASE BusDB;

-- Use Database
USE BusDB;

-- Create Table
CREATE TABLE BusFare (
    BusID INT PRIMARY KEY,
    BusName VARCHAR(50),
    Source VARCHAR(30),
    Destination VARCHAR(30),
    Fare DECIMAL(8,2)
);

-- Insert Records
INSERT INTO BusFare VALUES
(101, 'Express', 'Delhi', 'Jaipur', 600),
(102, 'Super Fast', 'Mumbai', 'Pune', 450),
(103, 'Volvo', 'Bhopal', 'Indore', 350),
(104, 'Sleeper', 'Nagpur', 'Hyderabad', 800),
(105, 'City Bus', 'Lucknow', 'Kanpur', 250);

-- Display All Records
SELECT * FROM BusFare;

-- Display Fare Greater Than 500
SELECT * FROM BusFare
WHERE Fare > 500;

-- Update Fare
UPDATE BusFare
SET Fare = 550
WHERE BusID = 102;

-- Delete Record
DELETE FROM BusFare
WHERE BusID = 105;

-- Display Records in Ascending Order of Fare
SELECT * FROM BusFare
ORDER BY Fare ASC;