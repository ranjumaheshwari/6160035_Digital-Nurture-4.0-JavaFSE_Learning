public class LibraryTest {
    public static void main(String[] args) {
        Library lib = new Library(5);

        lib.addBook(new Book(101, "The Alchemist", "Paulo Coelho"));
        lib.addBook(new Book(102, "Clean Code", "Robert Martin"));
        lib.addBook(new Book(103, "Rich Dad Poor Dad", "Robert Kiyosaki"));
        lib.addBook(new Book(104, "Design Patterns", "Erich Gamma"));

        Book[] bookArray = lib.getBooks();

        SearchUtil.linearSearch(bookArray, "Clean Code");
        SearchUtil.binarySearch(bookArray, "Clean Code");
    }
}