import java.util.Scanner;
public class User {
  //properties
String name;
String userName,password;
int id;

//constructor
User(String aName,int anid,String aUserName,String aUserPassword){
   name = aName;
   id = anid;
   userName = aUserName;
   password = aUserPassword;
}


  //methods  or behaviours
  boolean login(){
//we add logic to collect username and password
System.out.println("Enter your username");
Scanner input = new Scanner(System.in);
String enteredUserName = input.nextLine();
System.out.println("Enter your password");
String password = input.nextLine();
System.out.println("Welcome "+ enteredUserName);
//We check the validity of entered values

return false;
  }

  void printDetails(){
    System.out.println("Name: "+ name);
    System.out.println("username: " + userName);
    System.out.println("ID: "+ id);
  }
}