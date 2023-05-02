
import './App.css';
import Header from './components/header/Header.jsx';
import Navbar from './components/header/Navbar.jsx';
// import Login from './components/login/Login';
import TrendingPack from "./components/TrendingPackages/TrendingPack.jsx";
import FAQ from "./components/faqContainer/FAQ.jsx";
// import "./header.css";
import ContactUs from "./components/contactus/ContactUs.jsx";
import Footer from "./components/Footer/Footer.jsx"
// import Header from './Header';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
    <TrendingPack/>
     <FAQ/>
    <ContactUs/>
    <Footer/>
    </div>
  );
}

export default App;
