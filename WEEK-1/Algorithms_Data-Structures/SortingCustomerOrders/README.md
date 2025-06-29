# 📊 Sorting Customer Orders by Total Price

**Developed as part of Digital Nurture 4.0 Java FSE**

## 🎯 Project Goal

Demonstrate how sorting algorithms can be applied to prioritize high-value customer orders in an e-commerce setting.

## 📁 Structure

- `Order.java` – Represents customer orders with ID, name, and total price  
- `BubbleSorter.java` – Implements Bubble Sort (descending)  
- `QuickSorter.java` – Implements Quick Sort (descending)  
- `SortingTest.java` – Demonstrates sorting with both algorithms

## 💡 Algorithm Overview

| Algorithm      | Best     | Average  | Worst     | Space | Stable |
|----------------|----------|----------|-----------|-------|--------|
| Bubble Sort    | O(n)     | O(n²)    | O(n²)     | O(1)  | ✅     |
| Quick Sort     | O(n log n) | O(n log n) | O(n²) | O(log n) | ❌ |

> ⚠️ **Quick Sort** is generally preferred due to its average-case performance and suitability for large datasets.

## 💻 How to Compile & Run

```bash
javac *.java
java SortingTest