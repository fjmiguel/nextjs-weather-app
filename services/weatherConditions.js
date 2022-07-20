import {
  kilometersToMiles,
  metersPerSecondToMilesPerHour,
} from "./converters";

export const getWindSpeed = (unitSystem, windInMetersPerSecond) => unitSystem === "metric"
  ? windInMetersPerSecond
  : metersPerSecondToMilesPerHour(windInMetersPerSecond);

export const getVisibility = (unitSystem, visibilityInMeters) => unitSystem === "metric"
  ? (visibilityInMeters / 1000).toFixed(1)
  : kilometersToMiles(visibilityInMeters / 1000);
