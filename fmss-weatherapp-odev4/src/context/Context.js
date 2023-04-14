import { createContext, useState } from "react";

const WeatherContext = createContext({
  city: "",
  setCity: () => {},
  cityName: "",
  setCityName: () => {},
  info: [],
  setInfo: () => {},
});

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [cityName, setCityName] = useState("");
  const [info, setInfo] = useState([]);

  const values = {
    city,
    setCity,
    cityName,
    setCityName,
    info,
    setInfo,
  };

  return (
    <WeatherContext.Provider value={values}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
