# 🕹️ Command Pattern – Home Automation System

**Developed as part of Digital Nurture 4.0 Java FSE**

##  Project Goal

Implement the **Command Design Pattern** to simulate a home automation system where device actions (e.g., turning a light on/off) are encapsulated into command objects and triggered by a remote control (invoker).

##  Structure

- `Command.java` – Defines the command interface with `execute()`  
- `Light.java` – Receiver class representing a light with `turnOn()` and `turnOff()`  
- `LightOnCommand.java` – Concrete command to turn the light on  
- `LightOffCommand.java` – Concrete command to turn the light off  
- `RemoteControl.java` – Invoker class that holds and executes a command  
- `HomeAutomationTest.java` – Demonstrates issuing commands via remote control

##  How to Compile & Run

In terminal, inside the project folder:

```bash
javac *.java
java HomeAutomationTest