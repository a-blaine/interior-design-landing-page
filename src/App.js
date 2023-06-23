import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
