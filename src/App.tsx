/**
 * @imports This is aimed at importing the components to the navbar 
 */
import Home from "./Components/Home"
import Card from "./Components/Cards"
import Projects from './Components/Projects';
import Footers from "./Components/Footer";


/**
 * This is the main App component.
 * @component
 */
function App() {



  return (
    <>
      <Home/>
      <Card/>
      <Projects/>
      <Footers/>
    </>
  )
}

export default App
