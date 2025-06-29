import java.util.Arrays;
import java.util.Comparator;

public class SearchUtils {

    // Linear Search
    public static Product linearSearch(Product[] products, String name) {
        for (Product product : products) {
            if (product.getProductName().equalsIgnoreCase(name)) {
                return product;
            }
        }
        return null;
    }

    // Binary Search (requires sorted array)
    public static Product binarySearch(Product[] products, String name) {
        int low = 0;
        int high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;
            int result = products[mid].getProductName().compareToIgnoreCase(name);
            if (result == 0) return products[mid];
            else if (result < 0) low = mid + 1;
            else high = mid - 1;
        }
        return null;
    }

    // Utility to sort the array by productName
    public static void sortProductsByName(Product[] products) {
        Arrays.sort(products, Comparator.comparing(Product::getProductName));
    }
}
