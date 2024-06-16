import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import styles from "./CityList.module.css";

export default function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if(!cities.length) return <Message message="Adding your first city by clicking on a city on the map"/>

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
