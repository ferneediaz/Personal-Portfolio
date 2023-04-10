import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import css from "./styles/app.module.scss"
import About from "./components/about/About";
import Work from "./components/Work/Work";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
const App = () => {
  
  return <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <About />
      <Work />
      <Portfolio />
      <Footer />
  </div>
};

export default App;
