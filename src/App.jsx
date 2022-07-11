import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Router from './Router';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Announcement from './components/Announcement';


const App = () => {
  return (
    <BrowserRouter>
    
      <Announcement />

      <Navbar />

      <Router />

      <Newsletter />

      <Footer />

    </BrowserRouter>
  );
}

export default App;
