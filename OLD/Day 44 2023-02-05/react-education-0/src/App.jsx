import {
  Navbar,
  Home,
  About,
  Teacher,
  Contact,
  Courses,
  Footer
} from "./components/index"


function App() {


  return (
    <div className=" font-Poppins bg-Solitude">
      <Navbar />
      <Home />
      <About />
      <Teacher />
      <Contact />
      <Courses />
      <Footer />
    </div>
  )
}

export default App
