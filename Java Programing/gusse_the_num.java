import java.util.Scanner;

public class gusse_the_num {

    public static void main(String[] args) {
        int myNum = (int) (Math.random() * 100);
        Scanner sc = new Scanner(System.in);
        int userNum = 0;
        do {
            System.out.println("Guess my Number : ");
            System.out.println("Enter the Negative for exit : ");
            userNum = sc.nextInt();
            if (userNum == myNum) {
                System.out.println("WOOHOO... Correct Number !");
                break;
            } else if (userNum > myNum) {
                System.out.println("This number is too large...");
            } else {
                System.out.println("This number is too small...");
            }
        } while (userNum >= 0);
        sc.close();
    }
}