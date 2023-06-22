import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="hero">
          <h1>Hello world</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
