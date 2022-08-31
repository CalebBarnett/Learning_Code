/* Only drop table if it exists. */
DROP TABLE IF EXISTS person;

/* Create again to work with it. */
CREATE TABLE person (
    id INTEGER PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    age INTEGER
);

/* Rename the table to people. */
ALTER TABLE person RENAME TO people;

/* Add a hatred column to peoples. */
ALTER TABLE people ADD COLUMN hatred INTEGER;

/* Rename peoples back to person. */
ALTER TABLE people RENAME To person;

.schema person

/* We don't need that. */
DROP TABLE person;
