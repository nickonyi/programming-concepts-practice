import java.util.Scanner;

public class USERMSM  extends User{
    public static void main(String args[]){
        User user1 = new User();
        Scanner input = new Scanner(System.in);
        System.out.println("What is your name?");
        user1.name = input.nextLine();
        System.out.println("What is your username");
        user1.userName = input.nextLine();
        System.out.println("What is your id?");
        user1.id = input.nextInt();
        user1.printUserDetails();
        
    }
    }

