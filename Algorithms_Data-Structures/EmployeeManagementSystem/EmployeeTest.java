public class EmployeeTest {
    public static void main(String[] args) {
        EmployeeManager manager = new EmployeeManager(5);

        manager.addEmployee(new Employee(101, "Aarav", "Developer", 65000));
        manager.addEmployee(new Employee(102, "Neha", "HR Manager", 75000));
        manager.addEmployee(new Employee(103, "Kiran", "Analyst", 58000));

        manager.searchById(102);
        manager.deleteById(101);
        manager.listAll();
    }
}