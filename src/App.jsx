import './App.css';
import Announcement from './components/Announcement';
import Navbar from './components/Navbar';
import Slider from './components/Slider';


const App = () => {
  return (
    <div className="App">
        <Announcement />
        <Navbar />
        <Slider />
    </div>
  );
}

export default App;
