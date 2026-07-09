-- Create Database
CREATE DATABASE MovieDB;

-- Select Database
USE MovieDB;

-- Create Table
CREATE TABLE Movies (
    MovieID INT PRIMARY KEY,
    MovieName VARCHAR(50),
    Genre VARCHAR(30),
    Rating DECIMAL(3,1)
);

-- Insert Records
INSERT INTO Movies (MovieID, MovieName, Genre, Rating)
VALUES
(101, '3 Idiots', 'Comedy', 8.4),
(102, 'Dangal', 'Sports', 8.5),
(103, 'KGF', 'Action', 8.2),
(104, 'Pushpa', 'Action', 7.8),
(105, 'Pathaan', 'Action', 6.8);

-- Display All Records
SELECT * FROM Movies;

-- Display Movies with Rating Greater Than 8
SELECT * FROM Movies
WHERE Rating > 8;