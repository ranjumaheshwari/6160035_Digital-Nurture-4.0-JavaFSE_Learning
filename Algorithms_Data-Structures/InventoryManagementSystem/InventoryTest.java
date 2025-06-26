public class InventoryTest {
    public static void main(String[] args) {
        Inventory inventory = new Inventory();

        Product p1 = new Product("P101", "Laptop", 20, 55000);
        Product p2 = new Product("P102", "Mouse", 50, 450);
        Product p3 = new Product("P103", "Keyboard", 30, 1200);

        inventory.addProduct(p1);
        inventory.addProduct(p2);
        inventory.addProduct(p3);

        inventory.updateProduct("P102", 60, 499);
        inventory.deleteProduct("P101");

        inventory.listAllProducts();
    }
}