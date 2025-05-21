import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import CanvasSketch from './components/CanvasSketch';

function App() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-white relative">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Header />
        <Hero />
        <About />
        <Footer />
      </div>
      <CanvasSketch />
    </div>
  );
}

export default App;
