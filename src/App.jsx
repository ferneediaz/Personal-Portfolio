import Header from "./Header/Header";
import Hero from "./components/Hero/Hero";
import css from "./styles/app.module.scss"
import About from "./components/about/About";
const App = () => {
  
  return <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <About />
  </div>
};

export default App;
