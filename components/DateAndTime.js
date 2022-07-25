import { getWeekDay, getTime, getTimeFormatAMPM } from "../services/timeFormat";
import styles from "../styles/DateAndTime.module.css";

export const DateAndTime = ({ weatherData, unitSystem }) => {
  const weekDay = getWeekDay(weatherData);
  const time = getTime(
    unitSystem,
    weatherData.dt,
    weatherData.timezone
  );
  const timeFormatAMPM = getTimeFormatAMPM(unitSystem, weatherData.dt, weatherData.timezone);

  return (
    <div className={styles.wrapper}>
      <h2>
        {weekDay}, {time} {timeFormatAMPM}
      </h2>
    </div>
  );
};
