class NumberThread extends Thread {

    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Number Thread: " + i);
            try {
                Thread.sleep(1000); // Pause for 1 second
            } catch (InterruptedException e) {
                System.out.println("Thread interrupted.");
            }
        }
    }
}

class AlphabetThread extends Thread {

    public void run() {
        for (char ch = 'A'; ch <= 'E'; ch++) {
            System.out.println("Alphabet Thread: " + ch);
            try {
                Thread.sleep(1000); // Pause for 1 second
            } catch (InterruptedException e) {
                System.out.println("Thread interrupted.");
            }
        }
    }
}

public class multiThreading {
    public static void main(String[] args) {

        NumberThread t1 = new NumberThread();
        AlphabetThread t2 = new AlphabetThread();

        t1.start();
        t2.start(); 
    }
}
