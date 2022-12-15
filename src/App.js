import "./App.css";
import Form from "./Form";
import Weather from "./Weather";
import Footer from "./Footer";
import Country from "./Country";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App house-cont">
      <Form />
      <Country />
      <Weather />
      <Footer />
    </div>
  );
}

export default App;
