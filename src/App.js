import './App.css';
import Home from './Components/Hero/Hero';
import Header from './Components/NavBar/NavBar'; 
import Count from './Components/Count/Count';
import Courses from './Components/Courses/Course';
import About from './Components/About/About';
import Reviews from './Components/Review/Review';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Count />
      <About />
      <Courses />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
