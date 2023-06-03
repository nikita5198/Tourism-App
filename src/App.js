
import './App.css';
import Header from './components/header/Header.jsx';
import Navbar from './components/header/Navbar.jsx';
// import Login from './components/login/Login';
import TrendingPack from "./components/TrendingPackages/TrendingPack.jsx";
import FAQ from "./components/faqContainer/FAQ.jsx";
// import "./header.css";
import ContactUs from "./components/contactus/ContactUs.jsx";
import Footer from "./components/Footer/Footer.jsx"
import { Route, Routes } from 'react-router';
import Hotes from './components/IRCTCComponents/Hotels';
import Bus from './components/IRCTCComponents/Bus';
import Lounge from './components/IRCTCComponents/Lounge';
import Cruise from './components/IRCTCComponents/Cruise';
// import Header from './Header';
function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Routes>
      <Route path='/' element={<Header/>}/>
     <Route path="/hotels" element={<Hotes/>} />
        <Route path="/bus" element={<Bus/>} />
        <Route path="/lounge" element={<Lounge/>} />
        <Route path="/cruise" element={<Cruise/>} />
        </Routes>
     <Footer/>
     
    </div>
  );
}

export default App;
