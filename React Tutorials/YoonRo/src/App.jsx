import Homepage from "./pages/Homepage";
import Newton from "./pages/Newton";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Footer} from "./components/index";




function App() {


  return (
    <Router>
           <div className=" font-Gloock bg-white">
            <Navbar />
       <Routes>
       <Route exact path="/" element={<Homepage />} />
       <Route exact path="/Newton" element={<Newton />} />
    </Routes>
    <Footer/>
    </div>
    </Router>
  )
}

export default App
