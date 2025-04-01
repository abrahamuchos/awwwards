import Hero from "./components/Hero.jsx";

const App = () => (
  <main className='relative min-h-screen w-screen overflow-x-hidden'>
    <Hero/>

    <section className='w-full min-h-screen z-0 bg-blue-300'/>
  </main>
);

export default App;