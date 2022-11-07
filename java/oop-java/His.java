import java.util.Scanner;

public class His {
    public static void main(String[] args){
    Scanner input = new Scanner(System.in);
    System.out.println("Enter your name:");
    String name = input.nextLine();
    System.out.println("Enter password");
    String password = input.nextLine();
    String paswad = "cow";


    if(password.equals(paswad)){
        Patient wafula = new Patient();
        wafula.register();
        
    } else {
        System.out.println("It is wrong");
    }
    }
}