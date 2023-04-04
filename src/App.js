import "./App.css";
import Home from "./Components/Hero/Hero";
import Header from "./Components/NavBar/NavBar";
// import Count from "./Components/Count/Count";
// import Courses from "./Components/Courses/Course";
import About from "./Components/About/About";
import Join from "./Components/Join/Join";
// import Reviews from "./Components/Review/Review";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Pricing from "./Components/Pricing/Pricing";
import Benefits from "./Components/Benefits/Benefits";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* <Count /> */}
      <About />
      <Join />
      <Benefits />
      {/* <Courses />
      <Reviews /> */}
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
