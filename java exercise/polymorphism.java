class Animal {

    public void sound() {
        System.out.println("Animals make different sounds.");
    }
}
class Dog extends Animal {

    @Override
    public void sound() {
        System.out.println("Dog barks.");
    }
}
class Cat extends Animal {

    @Override
    public void sound() {
        System.out.println("Cat meows.");
    }
}

class Cow extends Animal {

    @Override
    public void sound() {
        System.out.println("Cow moos.");
    }
}

public class polymorphism {

    public static void main(String[] args) {

        Animal a;

        a = new Dog();
        a.sound();

        a = new Cat();
        a.sound();

        a = new Cow();
        a.sound();
    }
}