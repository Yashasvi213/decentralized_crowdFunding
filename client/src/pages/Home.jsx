import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import WhyUS from "../components/WhyUS";
import FooterCTA from "../components/FooterCTA";
import ToolKit from "../components/ToolKit";
import GradientWarpper from "../components/GradientWrapper";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="text-[20px]">
      <GradientWarpper>
        <Hero />
      </GradientWarpper>
      <WhyUS />
      <ToolKit />
      <FooterCTA />
    </div>
  );
}

export default Home;
