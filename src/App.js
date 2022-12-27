import "./App.css";
import Form from "./Form";
import Weather from "./Weather";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App house-cont">
      <Form />
      <Weather />
      <Footer />
    </div>
  );
}

export default App;
