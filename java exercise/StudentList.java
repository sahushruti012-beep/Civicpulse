import java.util.ArrayList;
public class StudentList{
    public static void main(String[] args) {

        ArrayList<String> students = new ArrayList<>();
        students.add("Shruti");
        students.add("Suman");
        students.add("Priya");
        students.add("Aman");

        System.out.println("Student List:");
        for (String name : students) {
            System.out.println(name);
        }

        System.out.println("\nTotal Students: " + students.size());

        System.out.println("First Student: " + students.get(0));

        students.remove("Suman");

        System.out.println("\nUpdated Student List:");
        for (String name : students) {
            System.out.println(name);
        }
    }
}