import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";

const App = () => (
  <main className='relative min-h-screen w-screen overflow-x-hidden'>
    <Hero/>
    <About/>
    <section className='w-full min-h-screen z-0 bg-blue-300'/>
  </main>
);

export default App;