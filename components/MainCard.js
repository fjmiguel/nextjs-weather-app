import Image from "next/image";
import { getTemperature } from "../services/weatherConditions";
import styles from "../styles/MainCard.module.css";

export const MainCard = ({
  city,
  country,
  description,
  iconName,
  unitSystem,
  weatherData,
}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.location}>
        {city}, {country}
      </h1>
      <p className={styles.description}>{description}</p>
      <Image
        width="300px"
        height="300px"
        src={`/icons/${iconName}.svg`}
        alt="weatherIcon"
      />
      <h1 className={styles.temperature}>
        {getTemperature(unitSystem, weatherData.main.temp)}
      </h1>
      <p>
        Feels like {getTemperature(unitSystem, weatherData.main.feels_like)}
      </p>
    </div>
  );
};
