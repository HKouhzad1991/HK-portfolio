import Experties from "./components/Experties/Experties";
import Header from "./components/Header/Header";
import People from "./components/People/People";
import Portfolio from "./components/Portfolio/Portfolio";
import Hero from "./components/hero/Hero";
import css from "./styles/app.module.scss";
const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Experties />
      <Portfolio />
      <People />
    </div>
  );
};

export default App;
