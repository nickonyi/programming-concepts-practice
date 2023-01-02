public class Ronaldo implements Player,Messi {
   public void move (){
        System.out.println("Fast paced ronaldo sprints on the right wing");
    }

    @Override
    public void kick() {
        System.out.println("He puts the cross over the middle");
        
    }

    @Override
    public void header() {
        System.out.println("The ball bounces back off a defender and he heads it in");
        
    }
}

