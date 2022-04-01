import logo from './logo.svg';
import './App.css';
import CarouselComp from './components/Carousle';
import Header from './components/Header';


function App() {
  return (
    <div className="App">      
<Header />
      <CarouselComp style={{zIndex:1,position:"absolute"}}/>
    </div>
  );
}

export default App;
