import './App.css';
import Heading from './Heading';
import Form from "./Form";
import Weather from "./Weather";
import Footer from "./Footer";
import Icondescription from "./Icondescription";
import Forecast from "./Forecast";


function App() {
  return (
    <div className="App">
      <Heading />
      <div class="house-cont">
        <div class="container">
          <div class="row align-items-start">
            <div class="row justify-content-between">
              <div class="row">
                <Form />
              </div>
              <Forecast />
              <Icondescription />
            </div>
          </div>
        </div>
        <div class="center-container iconix">
          <div class="container overflow-hidden ms-5" id="forecasting">
            <Weather />
          </div>
        </div>
      </div>
      <Footer />
      <App />
    </div>
  );
}

export default App;
