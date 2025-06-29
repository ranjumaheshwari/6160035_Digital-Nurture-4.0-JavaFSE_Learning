# 💳 Strategy Pattern – Dynamic Payment System

**Developed as part of Digital Nurture 4.0 Java FSE**

##  Project Goal

Apply the **Strategy Design Pattern** to implement a flexible payment system where the user can dynamically select and switch between different payment methods (like Credit Card and PayPal) at runtime.

##  Structure

- `PaymentStrategy.java` – Interface defining the `pay()` method  
- `CreditCardPayment.java` – Implements payment via Credit Card  
- `PayPalPayment.java` – Implements payment via PayPal  
- `PaymentContext.java` – Context class that delegates payment to selected strategy  
- `PaymentTest.java` – Demonstrates switching between different strategies

##  How to Compile & Run

In terminal, inside the project folder:

```bash
javac *.java
java PaymentTest