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
    <div className=" font-Poppins bg-[#e4dcd4]">
      <Navbar />
      <Home />
      <Courses />
      <Footer />
    </div>
  )
}

export default App
