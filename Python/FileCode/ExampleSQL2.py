
import sqlite3
#Query examples
def run_query(query):
    conn = sqlite3.connect("library.db")
    cursor = conn.cursor()
    cursor.execute(query)
    result = cursor.fetchall()
    conn.close()
    return result

"""
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
    print(row)"""


All_data_books = run_query('SELECT * from books')
print("authors books")
for row in All_data_books:
    print(row)

All_data_authors = run_query('SELECT * from authors')
print("authors Table")
for row in All_data_authors:
    print(row)




All_data_patrons = run_query('SELECT * from patrons')
print("authors patrons")
for row in All_data_patrons:
    print(row)