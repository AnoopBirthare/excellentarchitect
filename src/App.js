import "./App.css";
import CarouselComp from "./components/Carousle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DetailsCards from "./components/DetailsCards";
import TeamCards from "./components/TeamCards";

function App() {
  console.log("window-->", window.innerWidth);
  return (
    <div className="App" style={{ flex: 1 }}>
      <div
        style={{
          position: window.innerWidth > 1000 ? "fixed" : "static",
          zIndex: 2,
          width: "100%",
          backgroundColor: "rgba(65, 79, 91,.90)",
        }}
      >
        <Header />
      </div>
      <div style={{}}>
        <CarouselComp />
        <DetailsCards />
        <TeamCards />
        <Footer />
      </div>
    </div>
  );
}

export default App;
