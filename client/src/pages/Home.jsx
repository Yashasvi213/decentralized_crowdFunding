import Lottie from "lottie-react";
import arrowAnimation from "../assets/arrowAnimation.json";
import creatorAnimation from "../assets/creatorAnimation.json";
import donateboxAnimation from "../assets/donateboxAnimation.json";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
<<<<<<< main
import Hero from "../components/Hero";
import WhyUS from "../components/WhyUS";
import Services from "../components/Services";
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Hero />
      {/* <div className=" w-[100vw] h-[40vh]">
    <div className= 'pl-10 flex w-[90%] justify-between'> 
    <div>
     <h1 className="text-[2.5em]">Create your own Campaign</h1>
=======
>>>>>>> main

import campaignImage from "../assets/campaign.png"; // Import your campaign image
import exploreImage from "../assets/explore.png"; // Import your explore image

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="flex">
        {/* Left side: Create your own Campaign */}
        <div className="box-container flex-grow">
          <div className="box-content p-8 border-black border-2 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img
                className="mr-4 rounded-lg"
                src={campaignImage}
                alt="Create Campaign"
                style={{ width: "100px", height: "100px" }} // Adjust image size
              />
              <h1 className="text-3xl font-semibold">
                Create your own Campaign
              </h1>
            </div>
            <p className="text-gray-700 mb-4">
              With just a few clicks, you can create your own campaign, sharing
              your passion, creativity, or cause with the world. Whether you're
              an aspiring entrepreneur, an artist seeking support for your next
              project, or a community champion rallying for change, our platform
              empowers you to inspire and engage supporters globally.
            </p>
            <Link
              className="self-center p-4 px-6 border-4 rounded-xl bg-orange-500 text-white hover:bg-orange-600"
              to={"/CreateCampaign"}
            >
              Create Your Campaign!
            </Link>
          </div>
        </div>

        {/* Right side: Explore campaigns */}
        <div className="box-container ml-4 flex-grow">
          <div className="box-content p-8 border-black border-2 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img
                className="mr-4 rounded-lg"
                src={exploreImage}
                alt="Explore Campaigns"
                style={{ width: "100px", height: "100px" }} // Adjust image size
              />
              <h1 className="text-3xl font-semibold">
                Explore campaigns
              </h1>
            </div>
            <p className="text-gray-700 mb-4">
              These campaigns foster inclusivity, transparency, and autonomy,
              empowering individuals worldwide to support and participate in
              projects that resonate with their values and aspirations.
            </p>
            <Link
              className="self-center p-4 px-6 border-4 rounded-xl bg-orange-500 text-white hover:bg-orange-600"
              to={"/JoinCampaign"}
            >
              Explore Campaigns
            </Link>
          </div>
        </div>
      </div>
<<<<<<< main
      <Link className="self-center p-4 px-[4em] border-4 rounded-xl bg-orange-500" to={'/JoinCampaign'}>Explore Campaigns </Link>
    
    </div>    
   </div> */}
      <WhyUS />
    </>
=======
    </div>
>>>>>>> main
  );
}

export default Home;
