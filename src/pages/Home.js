import HeroSection from '../components/Home/HeroSection Home/HeroSection';
import HostingPlans from '../components/Home/PlansSection/HostingPlans';
import Navbar from '../components/Navbar/Navbar';
import Services from '../components/Home/ServicesSection/Services';
import TrustedSection from '../components/Home/TrustedSection/TrustedSection';
import FeaturesSection from '../components/Home/FeaturesSection/FeaturesSection';
import Testimonials from '../components/Testimonials/Testimonials';
import Footer from '../components/Footer/Footer';

function Home() {
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

export default Home;
