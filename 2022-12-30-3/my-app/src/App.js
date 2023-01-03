import './App.css';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';

function App() {
  return (
    <div className="App">
   <Header />
      <main className='Main'>
        <Home/>
      </main>
    </div>
  );
}

export default App;
