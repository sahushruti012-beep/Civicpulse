CREATE DATABASE College;

USE College;

CREATE TABLE Student (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(50),
    Age INT
);

INSERT INTO Student VALUES
(1, 'Shruti', 20),
(2, 'Rahul', 21);

SELECT * FROM Student;