import java.util.Arrays;
import java.util.Comparator;

public class SearchUtil {
    public static void linearSearch(Book[] books, String title) {
        System.out.println("\n Linear Search Results:");
        for (Book b : books) {
            if (b.getTitle().equalsIgnoreCase(title)) {
                System.out.println("Found: " + b);
                return;
            }
        }
        System.out.println("Book not found.");
    }

    public static void binarySearch(Book[] books, String title) {
        // Ensure books are sorted by title
        Arrays.sort(books, Comparator.comparing(Book::getTitle));

        int left = 0, right = books.length - 1;
        title = title.toLowerCase();

        while (left <= right) {
            int mid = (left + right) / 2;
            int cmp = books[mid].getTitle().compareTo(title);

            if (cmp == 0) {
                System.out.println("\n Binary Search Result:\nFound: " + books[mid]);
                return;
            } else if (cmp < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        System.out.println("\n Binary Search Result:\nBook not found.");
    }
}