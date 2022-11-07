import java.util.*;
public class World {
        static void change(String t) {
        t = new String ("World");
        }
        public static void main (String args[]){
        String s = new String("Hello");
        change(s);
        System.out.println(s);
        }
        
}
