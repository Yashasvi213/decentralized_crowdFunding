import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import WhyUS from "../components/WhyUS";
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Hero />
      <WhyUS />
    </>
  );
}

export default Home;
