public class TaskManager {
    private TaskNode head;

    public void addTask(Task task) {
        TaskNode newNode = new TaskNode(task);
        newNode.next = head;
        head = newNode;
        System.out.println("Task added: " + task);
    }

    public void deleteTask(int taskId) {
        TaskNode current = head, prev = null;

        while (current != null && current.task.getTaskId() != taskId) {
            prev = current;
            current = current.next;
        }

        if (current == null) {
            System.out.println("Task ID " + taskId + " not found.");
            return;
        }

        if (prev == null) {
            head = head.next;
        } else {
            prev.next = current.next;
        }

        System.out.println("Deleted task: " + current.task);
    }

    public void searchTask(int taskId) {
        TaskNode current = head;
        while (current != null) {
            if (current.task.getTaskId() == taskId) {
                System.out.println("Found task: " + current.task);
                return;
            }
            current = current.next;
        }
        System.out.println("Task ID " + taskId + " not found.");
    }

    public void listAllTasks() {
        System.out.println("\n-- All Tasks --");
        TaskNode current = head;
        while (current != null) {
            System.out.println(current.task);
            current = current.next;
        }
    }
}