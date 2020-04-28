-- Create a new database called 'Movie_Manager' --
Create Database Movie_Manager

-- Create a new table called 'Actors' for storing data
CREATE TABLE Actors(
    ActorID SERIAL PRIMARY KEY,
    Fullname VARCHAR(255),
    Gender Varchar(255),
    Picture Varchar(255),
);