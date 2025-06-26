# 👥 Employee Management System (Array-Based)

**Developed as part of Digital Nurture 4.0 Java FSE**

## 🎯 Project Goal

Develop a simple employee management system using arrays to understand low-level memory representation and algorithmic performance of array operations.

## 📁 Structure

- `Employee.java` – Represents employee data  
- `EmployeeManager.java` – Manages employee records with array operations  
- `EmployeeTest.java` – Demonstrates add, search, delete, and list functionality

## 💡 Core Concepts

- Arrays are stored in **contiguous memory** allowing O(1) access by index  
- Arrays offer predictable structure but fixed size  
- Deleting or searching is O(n) due to element shifting or scanning

## 💻 How to Compile & Run

```bash
javac *.java
java EmployeeTest