public class SearchTest {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Shoes", "Fashion"),
            new Product(102, "Laptop", "Electronics"),
            new Product(103, "Notebook", "Stationery"),
            new Product(104, "Watch", "Accessories")
        };

        // --- Linear Search ---
        Product result1 = SearchUtils.linearSearch(products, "Notebook");
        System.out.println("Linear Search Result: " + (result1 != null ? result1 : "Not Found"));

        // --- Binary Search ---
        SearchUtils.sortProductsByName(products); // Must sort first
        Product result2 = SearchUtils.binarySearch(products, "Notebook");
        System.out.println("Binary Search Result: " + (result2 != null ? result2 : "Not Found"));
    }
}
