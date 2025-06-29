import java.util.HashMap;

public class Inventory {
    private HashMap<String, Product> productMap = new HashMap<>();

    public void addProduct(Product product) {
        productMap.put(product.getProductId(), product);
        System.out.println("Product added: " + product);
    }

    public void updateProduct(String productId, int newQty, double newPrice) {
        Product product = productMap.get(productId);
        if (product != null) {
            product.setQuantity(newQty);
            product.setPrice(newPrice);
            System.out.println("Product updated: " + product);
        } else {
            System.out.println("Product not found.");
        }
    }

    public void deleteProduct(String productId) {
        Product removed = productMap.remove(productId);
        if (removed != null) {
            System.out.println("Product deleted: " + removed);
        } else {
            System.out.println("Product not found.");
        }
    }

    public void listAllProducts() {
        System.out.println("\n--- Inventory ---");
        for (Product product : productMap.values()) {
            System.out.println(product);
        }
    }
}