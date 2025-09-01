import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import MissionSection from '@/components/MissionSection';
import ProgramsSection from '@/components/ProgramsSection';
import ImpactSection from '@/components/ImpactSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <AboutSection />
        <MissionSection />
        <ProgramsSection />
        <ImpactSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
