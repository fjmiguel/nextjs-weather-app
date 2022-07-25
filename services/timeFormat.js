import {
  unixToLocalTime,
  timeTo12HourFormat
} from "./converters";

export const getTime = (unitSystem, currentTime, timezone) => unitSystem === "metric"
  ? unixToLocalTime(currentTime, timezone)
  : timeTo12HourFormat(unixToLocalTime(currentTime, timezone));

export const getTimeFormatAMPM = (unitSystem, currentTime, timezone) => unitSystem === "imperial"
  ? unixToLocalTime(currentTime, timezone).split(":")[0] >= 12
    ? "PM"
    : "AM"
  : "";

export const getWeekDay = (weatherData) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return weekday[
    new Date((weatherData.dt + weatherData.timezone) * 1000).getUTCDay()
  ];
}
