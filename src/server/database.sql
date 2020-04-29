-- Create a new database called 'Movie_Manager' --
Create Database Movie_Manager

-- Create a new table called 'Actors' for storing data
CREATE TABLE Actors (
    ActorID SERIAL PRIMARY KEY,
    Fullname VARCHAR(255),
    Gender Varchar(255),
    Picture Varchar(255)
);

-- Create a new table called 'Movies' for storing data
CREATE TABLE Movies (
    MovieID SERIAL PRIMARY KEY,
    Title VARCHAR(255),
    Genre Varchar(255),
    Picture Varchar(255)
);