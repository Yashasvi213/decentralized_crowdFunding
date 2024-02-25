import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Hero from "../components/Hero";
import WhyUS from "../components/WhyUS";
import FooterCTA from "../components/FooterCTA";
import ToolKit from "../components/ToolKit";
import GradientWarpper from "../components/GradientWrapper";
import { motion } from "framer-motion";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="text-[20px]">
      <GradientWarpper>
        <Hero />
        <WhyUS />
        <ToolKit />
        <FooterCTA />
      </GradientWarpper>
    </div>
  );
}

export default Home;
