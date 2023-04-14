import React, { useContext } from "react";
import styles from "./Info.module.css";
import WeatherContext from "../../context/Context";
export default function Info() {
  const { info, cityName } = useContext(WeatherContext);
  return (
    <div sx={{display:'flex', alignItems:'center', 
              minHeight:'10vh', width:'80%',
              margin:'2% auto', justifyContent:'space-between' }}>
      <h1 className={styles.cityName}>{cityName.toUpperCase()}</h1>
      <ul className={styles.list}>
        {info.map((item) => (
          <li key={item.date}>
            <h4>{item.date}</h4>
            <img src={item.day.condition.icon} alt={item.day.condition.text} />
{/* item.day.maxtemp_c ifadesi, bir hava durumu tahmini öğesinin day özelliğinin içindeki maxtemp_c özelliğine erişir. */}
{/* Math.floor() fonksiyonu, belirtilen sayıyı en yakın tam sayıya yuvarlar. Bu durumda, en yüksek sıcaklık değerini tam sayıya yuvarlamak için kullanılır. */}

            <h3>
              {Math.floor(item.day.maxtemp_c)} <sup>o</sup>C 
            </h3>
            <p>{item.day.condition.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}