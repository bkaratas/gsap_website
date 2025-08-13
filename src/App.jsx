import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"


gsap.registerPlugin(ScrollTrigger,SplitText) // her yerde kullanabilmek için kaydetmemiz gerekli

const App = () => {
  return (
    <main>
        <Navbar />
        <Hero />
    </main>
  )
}

export default App