import "./App.css";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About";
import Skills from "./components/skills/Skills.jsx";
import Services from "./components/services/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="Main">
        <Home />
        <About />
        <Skills/>
        <Services/>
      </main>
    </div>
  );
}

export default App;
