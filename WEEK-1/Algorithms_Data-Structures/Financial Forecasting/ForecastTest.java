public class ForecastTest {
    public static void main(String[] args) {
        double start = 5000.0;
        double rate = 0.07; // 7% fixed growth
        int years = 5;

        // Constant rate forecast
        double future = FinancialForecast.forecast(start, years, rate);
        System.out.printf("Fixed Rate Forecast for %d years: INR %.2f\n", years, future);

        // Variable rate forecast
        double[] dynamicRates = {0.05, 0.06, 0.04, 0.07, 0.08};
        double variableFuture = FinancialForecast.forecastVariableRate(start, 0, dynamicRates);
        System.out.printf("Variable Rate Forecast: INR %.2f\n\n", variableFuture);

        // Year-wise projection
        System.out.println("Year-by-Year Projection:");
        FinancialForecast.printProjection(start, dynamicRates);
    }
}
