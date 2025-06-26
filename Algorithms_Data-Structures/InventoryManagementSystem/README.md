# 📦 Inventory Management System

**Developed as part of Digital Nurture 4.0 Java FSE**

## 🎯 Project Goal

Build an efficient inventory management system using Java and appropriate data structures to store, retrieve, update, and delete product records in a warehouse environment.

## 📁 Structure

- `Product.java` – Defines the product model with ID, name, quantity, and price  
- `Inventory.java` – Manages products using a `HashMap` for fast operations  
- `InventoryTest.java` – Demonstrates core functionality with sample use cases

## 💡 Why HashMap?

- Provides **O(1)** average time complexity for insertions, updates, and deletions  
- Efficient for large-scale inventory systems where quick access is vital

## 💻 How to Compile & Run

In terminal, inside the project folder:

```bash
javac *.java
java InventoryTest