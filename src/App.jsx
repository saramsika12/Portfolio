
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Achievements } from "./components/Achievements/Achievements";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
     <div className={styles.App}>
    <Navbar/>
    <Hero/>
    <About/>
    <Experience/>
    <Projects/>
    <Achievements/>
    <Contact/>
  </div>
  );
}

export default App
