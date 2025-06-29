public class Book {
    private int bookId;
    private String title;
    private String author;

    public Book(int bookId, String title, String author) {
        this.bookId = bookId;
        this.title = title.toLowerCase();  // normalize for search
        this.author = author;
    }

    public String getTitle() { return title; }

    @Override
    public String toString() {
        return "ID: " + bookId + ", Title: " + title + ", Author: " + author;
    }
}