public class TaskTest {
    public static void main(String[] args) {
        TaskManager manager = new TaskManager();

        manager.addTask(new Task(201, "Code Review", "Pending"));
        manager.addTask(new Task(202, "Write Documentation", "In Progress"));
        manager.addTask(new Task(203, "Push to GitHub", "Completed"));

        manager.listAllTasks();

        manager.searchTask(202);
        manager.deleteTask(201);
        manager.listAllTasks();
    }
}