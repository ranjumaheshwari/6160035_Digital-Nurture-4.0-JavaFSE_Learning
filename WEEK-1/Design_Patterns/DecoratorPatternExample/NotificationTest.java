public class NotificationTest {
    public static void main(String[] args) {
        Notifier baseNotifier = new EmailNotifier();

        Notifier notifierWithSMS = new SMSNotifierDecorator(baseNotifier);
        Notifier fullNotifier = new SlackNotifierDecorator(notifierWithSMS);

        fullNotifier.send("System update scheduled for tonight at 10PM.");
    }
}