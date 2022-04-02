import logo from './logo.svg';
import './App.css';
import CarouselComp from './components/Carousle';
import Header from './components/Header';
import Footer from './components/Footer';
import DetailsCards from './components/DetailsCards';

function App() {
  return (
    <div className="App">      
      <Header />
      <CarouselComp style={{zIndex:1,position:"absolute"}}/>
      <DetailsCards />
      <Footer/>
    </div>
  );
}

export default App;
