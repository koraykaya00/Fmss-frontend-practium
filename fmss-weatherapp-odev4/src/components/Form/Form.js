import React, { useContext, useState } from "react";
import axios from "axios";
import styles from "./Form.module.css";
import WeatherContext from "../../context/Context";
import { Search2Icon } from '@chakra-ui/icons'

export default function Form() {
  const { setInfo, setCityName } = useContext(WeatherContext);
  const [city, setCity] = useState("");

  const API_KEY = "3729da786f314a9eac3103025230604";
  const BASE_URL = "http://api.weatherapi.com/v1/forecast.json";

  const formSubmit = async (e) => {     //api çagrısı asenkron olarak gelen data değişkenine atanır.
    e.preventDefault();
    if (!city) {                        //eğer city boş ise fonksiyon bir şey yapmadan geri döner.
      return;
    }
    try {
      const { data } = await axios.get(BASE_URL, {    //api çağrısı anahtar parametre içeriyor.
        params: {
          key: API_KEY,
          q: city,
          days: 7,
          aqi: "no",
          alerts: "no",
          units: "metric",
          lang: "tr",
        },
      });
      setInfo(data.forecast.forecastday);
      setCityName(city);
      setCity("");
    } catch (error) {
      console.error(error);
    }
  };
// axios ile gelen verileri kullanır.
//data.forecast.forecastday ifadesi, gelen verilerin forecast nesnesinin içindeki forecastday özelliğine erişir.
//setInfo(data.forecast.forecastday) ifadesi, data.forecast.forecastday dizisini, React hook'u setInfo ile ilişkilendirilen bileşen durumunun bir parçası olarak ayarlar.
//setCityName(city) ifadesi, city değişkeninin değerini, React hook'u setCityName ile ilişkilendirilen bileşen durumunun bir parçası olarak ayarlar.
//setCity("") ifadesi, city değişkeninin değerini sıfırlar.
//catch bloğu, axios isteğinde herhangi bir hata olması durumunda çalışır ve hatanın konsola yazdırılmasını sağlar.
  return (
    <div>
      <form onSubmit={formSubmit}>
        <div className={styles.searchBar}>
          <input 
            style={{border:0, outline:0, padding:'1%', borderRadius:'20px', marginTop:'2%', fontSize:'large', backgroundColor:'antiquewhite'}}
            value={city}
            placeholder="Bir Şehir Giriniz"
            onChange={(e) => setCity(e.target.value)}
          />
          <button
           className={styles.btn} type="submit">
            <Search2Icon boxSize={20} />
          </button>
        </div>
      </form>
    </div>
  );
}
