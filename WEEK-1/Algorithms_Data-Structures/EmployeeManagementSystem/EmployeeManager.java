public class EmployeeManager {
    private Employee[] employees;
    private int count;

    public EmployeeManager(int size) {
        employees = new Employee[size];
        count = 0;
    }

    public void addEmployee(Employee emp) {
        if (count < employees.length) {
            employees[count++] = emp;
            System.out.println("Added: " + emp);
        } else {
            System.out.println("Employee list is full.");
        }
    }

    public void searchById(int id) {
        for (int i = 0; i < count; i++) {
            if (employees[i].getEmployeeId() == id) {
                System.out.println("Found: " + employees[i]);
                return;
            }
        }
        System.out.println("Employee not found.");
    }

    public void deleteById(int id) {
        for (int i = 0; i < count; i++) {
            if (employees[i].getEmployeeId() == id) {
                for (int j = i; j < count - 1; j++) {
                    employees[j] = employees[j + 1];
                }
                employees[--count] = null;
                System.out.println("Deleted employee with ID: " + id);
                return;
            }
        }
        System.out.println("Employee not found.");
    }

    public void listAll() {
        System.out.println("\n-- All Employees --");
        for (int i = 0; i < count; i++) {
            System.out.println(employees[i]);
        }
    }
}