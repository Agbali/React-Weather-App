import "./App.css";
import Form from "./Form";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App house-cont">
      <Form defaultcity= "New York" />
      <Footer />
    </div>
  );
}

export default App;
