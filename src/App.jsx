import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Features from "./components/Features.jsx";

const App = () => (
  <main className='relative min-h-screen w-screen overflow-x-hidden'>
    <Navbar/>
    <Hero/>
    <About/>
    <Features/>
    <section className='w-full min-h-screen z-0 bg-blue-300'/>
  </main>
);

export default App;