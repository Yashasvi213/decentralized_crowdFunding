import Lottie from "lottie-react";
import arrowAnimation from "../assets/arrowAnimation.json";
import creatorAnimation from "../assets/creatorAnimation.json";
import donateboxAnimation from "../assets/donateboxAnimation.json";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <>
    <div className=" w-[100vw] h-[40vh]">
    <div className= 'pl-10 flex w-[90%] justify-between'> 
    <div>
     <h1 className="text-[2.5em]">Create your own Campaign</h1>

     <p>With just a few clicks, you can create your own campaign, sharing your passion, creativity, or cause with the world.<br /> Whether you're an aspiring entrepreneur, an artist seeking support for your next project, or a community champion <br />rallying for change, our platform empowers you to inspire and engage supporters globally.</p>
      </div>
      <Link className="self-center p-4 px-[3em] border-4 rounded-xl bg-orange-500" to={'/CreateCampaign'}>Create Your Campaign !</Link>
    
    </div>    
    

      <h1 className=" pl-10 block w-[100%]">OR</h1>
    <div className= 'mt-10 pt-10 pl-10 flex w-[90%] justify-between'> 
    <div>
      
     <h1 className="text-[2.5em]">Explore campaigns</h1>

     <p>These campaigns foster inclusivity, transparency, and autonomy, empowering individuals worldwide to support and <br />participate in projects that resonate with their values and aspirations.</p>
      </div>
      <Link className="self-center p-4 px-[4em] border-4 rounded-xl bg-orange-500" to={'/JoinCampaign'}>Explore Campaigns </Link>
    
    </div>    
   </div>
    </>
  );
}

export default Home;
