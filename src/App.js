import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import HostingPlans from './components/PlansSection/HostingPlans';
import Navbar from './components/Navbar/Navbar';
import Services from './components/ServicesSection/Services';
import TrustedSection from './components/TrustedSection/TrustedSection';
import FeaturesSection from './components/FeaturesSection/FeaturesSection';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <> 
       <Navbar />
       <HeroSection />
      <TrustedSection />
      <Services /> 
      <HostingPlans />
     <FeaturesSection />
     <Testimonials />
     <Footer />
    </>
  );
}

export default App;
