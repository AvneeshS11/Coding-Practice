public class polymorphism {
    public static int add(int a,int b){
        return a+b;
    }
    public static int add(int a,int b,int c){
        return a+b+c;
    }
    public static int add(){
        return 20+50;
    }

    public static void main(String[] args) {
        System.out.println(add(1,2,3));
        System.out.println(add(5,6));
        System.out.println(add());
    }
}
