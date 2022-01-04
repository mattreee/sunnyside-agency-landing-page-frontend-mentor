import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FooterFooter from './components/FooterFooter';

function App() {
  return (
    <>
      <header className='header'>
        <Navigation />
        <Hero />
      </header>

      <main className='main'>
        <Features />
        <Testimonials />
      </main>

      <Footer />
      <FooterFooter />
    </>
  );
}

export default App;
