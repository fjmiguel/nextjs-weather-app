import {
  kilometersToMiles,
  metersPerSecondToMilesPerHour,
  celsiusToFahrenheit
} from "./converters";

export const getWindSpeed = (unitSystem, windInMetersPerSecond) => unitSystem === "metric"
  ? windInMetersPerSecond
  : metersPerSecondToMilesPerHour(windInMetersPerSecond);

export const getVisibility = (unitSystem, visibilityInMeters) => unitSystem === "metric"
  ? (visibilityInMeters / 1000).toFixed(1)
  : kilometersToMiles(visibilityInMeters / 1000);

export const getTemperature = (unitSystem, temperature) => {
  const isUnitSystemMetric = unitSystem === "metric";
  const unitSystemTemperature = isUnitSystemMetric
    ? Math.round(temperature)
    : Math.round(celsiusToFahrenheit(temperature));
  const unitSystemMeasureSymbol = isUnitSystemMetric ? "C" : "F";

  return `${unitSystemTemperature}°${unitSystemMeasureSymbol}`;
};
