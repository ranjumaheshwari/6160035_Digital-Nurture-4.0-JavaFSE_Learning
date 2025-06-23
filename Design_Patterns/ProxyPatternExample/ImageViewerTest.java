public class ImageViewerTest {
    public static void main(String[] args) {
        Image image1 = new ProxyImage("gallery/photo1.jpg");
        Image image2 = new ProxyImage("gallery/photo2.jpg");

        System.out.println("First display:");
        image1.display();  // Loads and displays

        System.out.println("\nSecond display:");
        image1.display();  // Uses cached image

        System.out.println("\nThird display:");
        image2.display();  // Loads and displays
    }
}