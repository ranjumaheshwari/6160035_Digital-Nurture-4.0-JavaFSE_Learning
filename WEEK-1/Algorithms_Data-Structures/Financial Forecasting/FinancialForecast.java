public class FinancialForecast {

    // Forecast with constant annual growth rate
    public static double forecast(double value, int years, double rate) {
        if (years == 0) return value;
        return forecast(value, years - 1, rate) * (1 + rate);
    }

    // Forecast with dynamic growth rates per year (e.g. rate[0] for year 1)
    public static double forecastVariableRate(double value, int year, double[] rates) {
        if (year == rates.length) return value;
        return forecastVariableRate(value, year + 1, rates) * (1 + rates[year]);
    }

    // Optional: Show year-by-year breakdown
    public static void printProjection(double initial, double[] rates) {
        double value = initial;
        System.out.printf("Year 0: INR %.2f\n", value);
        for (int i = 0; i < rates.length; i++) {
            value *= (1 + rates[i]);
            System.out.printf("Year %d: INR %.2f (Rate: %.2f%%)\n", i + 1, value, rates[i] * 100);
        }
    }
}
