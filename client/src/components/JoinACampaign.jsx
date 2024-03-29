import { Card, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logic from "../interface/logic";
import ExploreCard from "./ui/ExploreCard";

function truncateDescription(description, limit) {
  const words = description.split(" ");
  if (words.length > limit) {
    return words.slice(0, limit).join(" ") + "...";
  }
  return description;
}

const JoinACampaign = ({ wallet, tokenBalance }) => {
  const [campaigns, setCampaigns] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const { campaigns } = await logic.GetCampaigns();
        setCampaigns(campaigns);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCampaigns();
  }, []);

  const renderLoadingCards = () => {
    const loadingCards = [];
    for (let i = 0; i < 4; i++) {
      loadingCards.push(
        <Card key={i} className=" h-[40vh] p-4 shadow-md">
          <div className="animate-pulse flex flex-col justify-between h-full flex-wrap">
            <div>
              <div className="h-4 w-[300px]  bg-gray-300 rounded mb-2"></div>
              <div className="h-4 w-[300px] bg-gray-300 rounded mb-2"></div>
              <div className="h-4 w-[300px] bg-gray-300 rounded mb-2"></div>
            </div>
            <div>
              <div className="h-4 w-[300px] bg-gray-300 rounded mb-2"></div>
            </div>
          </div>
        </Card>
      );
    }
    return loadingCards;
  };
  const filteredCampaigns = campaigns.filter((campaign) =>
    campaign.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const navigate = useNavigate();
  return (
    <div className="w-[100vw] h-[80vh]">
      <div className="bg-blue-500 px-4 py-2 my-4 text-white">
        <p className="text-center text-xl mb-0 font-medium">
          want to create your own campaign?
          <a
            href="/CreateCampaign"
            className="inline-block underline text-orange-500"
          >
            &nbsp;click here to get started!
          </a>
        </p>
      </div>

      <div className="my-4 max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between">
          <h1 className="text-[2.5em] ">All Campaigns!</h1>
          <input
            type="text"
            placeholder="Search campaigns..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 rounded-md p-2 mb-4"
          />
        </div>

        <div className="flex flex-wrap">
          {isLoading && (
            <div className="flex gap-2 flex-wrap">{renderLoadingCards()}</div>
          )}
        </div>

        {error && (
          <div className="text-center text-red-500">
            <p>Error fetching campaigns: {error.message}</p>
          </div>
        )}

        {!isLoading && !error && (
          <div className="flex gap-4 flex-wrap justify-center mt-4 max-w-screen-xl mx-auto px-4">
            {filteredCampaigns
              .slice()
              .reverse()
              .map((campaign) => (
                <ExploreCard key={campaign.id} {...campaign}>
                  <button
                    onClick={() => navigate(`/join/${campaign.id}`)}
                    className="px-4 py-2 w-full text-center  border-2 rounded-md thisfknButton  text-md mt-2 border-black border-r-4 border-b-4 "
                  >
                    Join campaign
                  </button>
                </ExploreCard>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinACampaign;
