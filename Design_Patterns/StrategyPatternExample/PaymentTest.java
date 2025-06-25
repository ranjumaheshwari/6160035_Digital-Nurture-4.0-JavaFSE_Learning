public class PaymentTest {
    public static void main(String[] args) {
        PaymentContext context = new PaymentContext();

        // Pay using credit card
        context.setPaymentStrategy(new CreditCardPayment("1234-5678-9876-5432"));
        context.executePayment(2500.0);

        // Pay using PayPal
        context.setPaymentStrategy(new PayPalPayment("user@example.com"));
        context.executePayment(4200.0);
    }
}