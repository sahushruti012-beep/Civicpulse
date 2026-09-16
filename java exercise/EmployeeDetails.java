class Employee {
    private String name;
    private int salary;

    public void setData(String n, int s) {
        name = n;
        salary = s;
    }

    public void display() {
        System.out.println("Employee Name: " + name);
        System.out.println("Salary: " + salary);
    }
}
public class EmployeeDetails {
     public static void main(String[] args) {
        Employee emp = new Employee();
        emp.setData("Shruti", 30000);
        emp.display();
    }
}