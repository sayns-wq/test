
import './App.css';
import logo from './img/Shape.png'
import Slider from './Slider/Slider';

function App() {
  return (
    <div className="App">
      <Slider/>
      <img src = {logo} className = 'logo'></img>
    </div>
  );
}

export default App;
