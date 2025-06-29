public class Computer {
    // Required attributes
    private final String CPU;
    private final String RAM;

    // Optional attributes
    private final String storage;
    private final String graphicsCard;
    private final String operatingSystem;

    // Private constructor
    private Computer(Builder builder) {
        this.CPU = builder.CPU;
        this.RAM = builder.RAM;
        this.storage = builder.storage;
        this.graphicsCard = builder.graphicsCard;
        this.operatingSystem = builder.operatingSystem;
    }

    // Static Nested Builder Class
    public static class Builder {
        // Required
        private final String CPU;
        private final String RAM;

        // Optional
        private String storage;
        private String graphicsCard;
        private String operatingSystem;

        // Builder constructor with required attributes
        public Builder(String CPU, String RAM) {
            this.CPU = CPU;
            this.RAM = RAM;
        }

        public Builder storage(String storage) {
            this.storage = storage;
            return this;
        }

        public Builder graphicsCard(String graphicsCard) {
            this.graphicsCard = graphicsCard;
            return this;
        }

        public Builder operatingSystem(String operatingSystem) {
            this.operatingSystem = operatingSystem;
            return this;
        }

        public Computer build() {
            return new Computer(this);
        }
    }

    // For displaying the configuration
    public String toString() {
        return "Computer [CPU=" + CPU + ", RAM=" + RAM + ", Storage=" + storage +
               ", GraphicsCard=" + graphicsCard + ", OS=" + operatingSystem + "]";
    }
}
