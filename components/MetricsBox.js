import { degreesToCompass } from "../services/converters";
import { getTime, getTimeFormatAMPM } from "../services/timeFormat";
import { getVisibility, getWindSpeed } from "../services/weatherConditions";
import { MetricsCard } from "./MetricsCard";
import styles from "../styles/MetricsBox.module.css";

export const MetricsBox = ({ weatherData, unitSystem }) => {
  return (
    <div className={styles.wrapper}>
      <MetricsCard
        title={"Humidity"}
        iconSrc={"/icons/humidity.png"}
        metric={weatherData.main.humidity}
        unit={"%"}
      />
      <MetricsCard
        title={"Wind Speed"}
        iconSrc={"/icons/wind.png"}
        metric={getWindSpeed(unitSystem, weatherData.wind.speed)}
        unit={unitSystem == "metric" ? "m/s" : "m/h"}
      />
      <MetricsCard
        title={"Wind direction"}
        iconSrc={"/icons/compass.png"}
        metric={degreesToCompass(weatherData.wind.deg)}
      />
      <MetricsCard
        title={"Visibility"}
        iconSrc={"/icons/binocular.png"}
        metric={getVisibility(unitSystem, weatherData.visibility)}
        unit={unitSystem == "metric" ? "km" : "miles"}
      />
      <MetricsCard
        title={"Sunrise"}
        iconSrc={"/icons/sunrise.png"}
        metric={getTime(
          unitSystem,
          weatherData.sys.sunrise,
          weatherData.timezone
        )}
        unit={getTimeFormatAMPM(
          unitSystem,
          weatherData.sys.sunrise,
          weatherData.timezone
        )}
      />
      <MetricsCard
        title={"Sunset"}
        iconSrc={"/icons/sunset.png"}
        metric={getTime(
          unitSystem,
          weatherData.sys.sunset,
          weatherData.timezone
        )}
        unit={getTimeFormatAMPM(unitSystem, weatherData.sys.sunset, weatherData.timezone)} />
    </div>
  );
};
