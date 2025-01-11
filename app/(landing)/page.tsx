import Footer from "./_components/footer";
import Heading from "./_components/heading";
import Heroes from "./_components/heroes";
import { FeaturesSection } from "./_components/features-section";

const LandingPage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading />
        <Heroes />
        <FeaturesSection />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
