import Counter from "./Counter";
import {useState} from 'react'
import WeatherInfo from "./WeatherInfo";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About"

function App() {
  const [weatherInfo, setWeatherInfo] = useState('Sunny');
  return (
    <>
      <Header />
      <About />
      <Footer />
    </>
  );
}

export default App;
