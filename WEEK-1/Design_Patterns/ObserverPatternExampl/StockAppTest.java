public class StockAppTest {
    public static void main(String[] args) {
        StockMarket market = new StockMarket();

        Observer user1 = new MobileApp("Amit");
        Observer user2 = new WebApp("Neha");

        market.registerObserver(user1);
        market.registerObserver(user2);

        market.setStock("TATA Motors", 520.75);
        market.setStock("Infosys", 1455.60);
    }
}