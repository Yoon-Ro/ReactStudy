import './App.css';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
   <Header />
      <main className='Main'>
        <Home/>
        <About/>
      </main>
    </div>
  );
}

export default App;
