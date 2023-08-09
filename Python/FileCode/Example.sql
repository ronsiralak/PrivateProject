-- Create tables
CREATE TABLE authors (
    author_id INT PRIMARY KEY,
    author_name VARCHAR(100)
);

CREATE TABLE books (
    book_id INT PRIMARY KEY,
    title VARCHAR(200),
    author_id INT,
    publication_year INT,
    FOREIGN KEY (author_id) REFERENCES authors(author_id)
);

CREATE TABLE patrons (
    patron_id INT PRIMARY KEY,
    patron_name VARCHAR(100),
    membership_expiry DATE
);

-- Insert sample data
INSERT INTO authors (author_id, author_name) VALUES
    (1, 'Jane Austen'),
    (2, 'Charles Dickens'),
    (3, 'Mark Twain');

INSERT INTO books (book_id, title, author_id, publication_year) VALUES
    (1, 'Pride and Prejudice', 1, 1813),
    (2, 'Great Expectations', 2, 1860),
    (3, 'The Adventures of Huckleberry Finn', 3, 1884);

INSERT INTO patrons (patron_id, patron_name, membership_expiry) VALUES
    (1, 'John Smith', '2023-12-31'),
    (2, 'Jane Doe', '2023-10-15'),
    (3, 'Alice Johnson', '2024-02-28');

-- Query examples
-- List all books and their authors
SELECT b.title AS BookTitle, a.author_name AS AuthorName
FROM books b
JOIN authors a ON b.author_id = a.author_id;

-- Find books published before 1900
SELECT title, publication_year
FROM books
WHERE publication_year < 1900;

-- Get patron names whose membership has expired
SELECT patron_name
FROM patrons
WHERE membership_expiry < CURDATE();
