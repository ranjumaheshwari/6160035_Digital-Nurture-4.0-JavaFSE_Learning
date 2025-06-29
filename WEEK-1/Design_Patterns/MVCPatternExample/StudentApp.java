public class StudentApp {
    public static void main(String[] args) {
        // Model
        Student student = new Student("Meera", "S101", "A");

        // View
        StudentView view = new StudentView();

        // Controller
        StudentController controller = new StudentController(student, view);

        // Initial Display
        controller.updateView();

        System.out.println("\n-- Updating student data --\n");

        // Updating model via controller
        controller.setStudentName("Meera Jain");
        controller.setStudentGrade("A+");

        // Display updated data
        controller.updateView();
    }
}