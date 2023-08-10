import sqlite3

# Connect to the SQLite database (creates a new file if it doesn't exist)
conn = sqlite3.connect("library.db")
cursor = conn.cursor()

# Create tables
cursor.execute('''CREATE TABLE IF NOT EXISTS authors (
    author_id INTEGER PRIMARY KEY,
    author_name TEXT
);''')

cursor.execute('''CREATE TABLE IF NOT EXISTS books (
    book_id INTEGER PRIMARY KEY,
    title TEXT,
    author_id INTEGER,
    publication_year INTEGER,
    FOREIGN KEY (author_id) REFERENCES authors(author_id)
);''')

cursor.execute('''CREATE TABLE IF NOT EXISTS patrons (
    patron_id INTEGER PRIMARY KEY,
    patron_name TEXT,
    membership_expiry DATE
);''')

# Insert sample data
cursor.executemany('''INSERT INTO authors (author_id, author_name) VALUES (?, ?);''',
                   [(1, 'Jane Austen'), (2, 'Charles Dickens'), (3, 'Mark Twain')])

cursor.executemany('''INSERT INTO books (book_id, title, author_id, publication_year) VALUES (?, ?, ?, ?);''',
                   [(1, 'Pride and Prejudice', 1, 1813),
                    (2, 'Great Expectations', 2, 1860),
                    (3, 'The Adventures of Huckleberry Finn', 3, 1884)])

cursor.executemany('''INSERT INTO patrons (patron_id, patron_name, membership_expiry) VALUES (?, ?, ?);''',
                   [(1, 'John Smith', '2023-12-31'),
                    (2, 'Jane Doe', '2023-10-15'),
                    (3, 'Alice Johnson', '2024-02-28')])

# Commit changes and close connection
conn.commit()
conn.close()

# Query examples
def run_query(query):
    conn = sqlite3.connect("library.db")
    cursor = conn.cursor()
    cursor.execute(query)
    result = cursor.fetchall()
    conn.close()
    return result

# List all books and their authors
books_and_authors = run_query('''SELECT b.title AS BookTitle, a.author_name AS AuthorName
                                 FROM books b
                                 JOIN authors a ON b.author_id = a.author_id;''')
for row in books_and_authors:
    print(row)

# Find books published before 1900
old_books = run_query('''SELECT title, publication_year
                        FROM books
                        WHERE publication_year < 1900;''')
for row in old_books:
    print(row)

# Get patron names whose membership has expired
expired_patrons = run_query('''SELECT patron_name
                             FROM patrons
                             WHERE membership_expiry < DATE('now');''')
for row in expired_patrons:
    print(row)
