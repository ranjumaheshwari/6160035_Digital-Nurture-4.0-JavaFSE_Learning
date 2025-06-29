import java.util.Arrays;

public class Library {
    private Book[] books;
    private int count;

    public Library(int capacity) {
        books = new Book[capacity];
        count = 0;
    }

    public void addBook(Book book) {
        if (count < books.length) {
            books[count++] = book;
            System.out.println("Added: " + book);
        } else {
            System.out.println("Library is full.");
        }
    }

    public Book[] getBooks() {
        return Arrays.copyOf(books, count);
    }
}