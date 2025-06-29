public class ComputerBuilderTest {
    public static void main(String[] args) {
        Computer gamingRig = new Computer.Builder("Intel i9", "32GB")
                                .graphicsCard("NVIDIA RTX 4080")
                                .storage("2TB SSD")
                                .operatingSystem("Windows 11 Pro")
                                .build();

        Computer officePC = new Computer.Builder("Intel i5", "16GB")
                                .storage("512GB SSD")
                                .operatingSystem("Windows 10 Home")
                                .build();

        System.out.println("Gaming Rig: " + gamingRig);
        System.out.println("Office PC: " + officePC);
    }
}
