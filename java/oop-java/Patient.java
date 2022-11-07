import java.util.Scanner;
public class Patient {
    //propperties 
    String name;
    String county_of_residence;
    String id;

    //methods
    void register(){
        
        System.out.println("Registering the patient.....                                                                                                                                                                                                                                                                                                                                                                                                                        ");
        Scanner input = new Scanner(System.in);
        System.out.println("Enter the name");
        name = input.nextLine();
        System.out.println("Enter county of residence");
        county_of_residence = input.nextLine();
        System.out.println("Enter the id");
        id = input.nextLine();
        System.out.println("Name: "+ name);
        System.out.println("County_of_residence: " + county_of_residence);
        System.out.println("id: "+ id);
        





        

    }
    
}
