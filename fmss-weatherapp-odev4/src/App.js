import Form from "./components/Form/Form";
import Info from "./components/Info/Info";
import { WeatherProvider } from "./context/Context";
function App() {
  return (
    <div className="App">
      <h1 className="py-4 text-5xl text-white font-serif">Weather App</h1>
      <WeatherProvider>
        <Form />
        <Info />
      </WeatherProvider>
    </div>
  );
}

export default App;