public class PaymentTest {
    public static void main(String[] args) {
        PaymentProcessor paypal = new PayPalAdapter(new PayPalGateway());
        PaymentProcessor stripe = new StripeAdapter(new StripeGateway());

        paypal.processPayment(2500.0);
        stripe.processPayment(4200.0);
    }
}