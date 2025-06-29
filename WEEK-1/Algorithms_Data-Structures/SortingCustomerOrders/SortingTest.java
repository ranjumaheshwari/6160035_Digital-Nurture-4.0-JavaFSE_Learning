public class SortingTest {
    public static void main(String[] args) {
        Order[] orders = {
            new Order("O101", "Aarav", 2499.0),
            new Order("O102", "Divya", 9899.0),
            new Order("O103", "Kiran", 4750.0),
            new Order("O104", "Neha", 775.0)
        };

        System.out.println("Original Orders:");
        for (Order o : orders) System.out.println(o);

        // Bubble Sort
        BubbleSorter.sort(orders);
        System.out.println("\nSorted by Bubble Sort (Descending by Total Price):");
        for (Order o : orders) System.out.println(o);

        // Fresh array for quick sort
        Order[] orders2 = {
            new Order("O101", "Aarav", 2499.0),
            new Order("O102", "Divya", 9899.0),
            new Order("O103", "Kiran", 4750.0),
            new Order("O104", "Neha", 775.0)
        };

        QuickSorter.sort(orders2, 0, orders2.length - 1);
        System.out.println("\nSorted by Quick Sort (Descending by Total Price):");
        for (Order o : orders2) System.out.println(o);
    }
}