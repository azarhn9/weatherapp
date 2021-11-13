import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import GetWeatherInfo from "./GetWeatherInfo";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app">
        <div className="card">
          <div className="card-body">
            <GetWeatherInfo defaultCity="Shiraz" />
          </div>
        </div>
        <footer class="sourceCode">
                <a href="https://github.com/azarhn9/weatherapp.git" 
                    class="sourceCodeLink" target="_blank"
                    rel="noreferrer"> Coded by Azar Hosseininezhad
                </a>
            </footer>
      </div>
    </div>
  );
}