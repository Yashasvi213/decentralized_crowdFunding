import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logic from "../interface/logic";
import toast from "react-hot-toast";
import { toastError, toastSuccess } from "../utils/toastWrapper";

const JoinCard = ({ wallet }) => {
  const [amount, setAmount] = useState("");
  const [campaign, setCampaign] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const { joinid } = params;
  const id = parseInt(joinid);

  const onAmountChange = (e) => {
    setAmount(e.target.value);
  };

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const { campaigns } = await logic.GetCampaigns();
        const foundCampaign = campaigns.find((campaign) => campaign.id === id);
        setCampaign(foundCampaign);
        toastSuccess("Campaign fetched successfully");
      } catch (error) {
        toastError("Error fetching campaigns");
        console.error("Error fetching campaigns:", error);
        setCampaign(null);
      }
    };
    fetchCampaign();
  }, [id]);

  const sendAsset = async () => {
    // setIsLoading(true);
    try {
      let data = await logic.FundCampaign(wallet, id, amount);
      console.log("Funds sent successfully!");
      // Optionally, you can perform any additional actions after sending funds
    } catch (error) {
      console.error("Error sending funds:", error);
    }
  };
  if (!campaign) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[80vw] h-70vh] p-4 bg-white rounded-lg shadow-md animate-pulse">
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
        </div>
      </div>
    );
  }

  return (
    //
    //   <div className="w-[40vw] h-[80vh] flex flex-col  pl-10">
    //     Contribute to the campaign
    //     <h1 className="text-xl font-semibold mb-2">{campaign.name}</h1>
    //     <p className="text-gray-600">{campaign.description}</p>
    //     <div className="flex gap-2 items-center ">
    //       <p className="text-gray-700 font-semibold">
    //         Amount: {campaign.targetAmount}
    //       </p>
    //       <p className="text-gray-700 font-semibold">
    //         Amount: {campaign.currentAmount}
    //       </p>
    //       <p className="text-gray-700 font-semibold">
    //         End Time: {campaign.endTime}
    //       </p>
    //     </div>
    //     <div>
    //       <input
    //         type="text"
    //         className="w-[50vw] border-3 rounded-md p-2"
    //         placeholder="Enter the amount"
    //         onChange={onAmountChange}
    //       />
    //       <button
    //         className={`connect-button w-[60%] self-center py-[1em] flex justify-center items-center bg-blue-500 rounded-md border-2 ${
    //           isLoading ? "opacity-50 cursor-not-allowed" : ""
    //         }`}
    //         onClick={sendAsset}
    //         disabled={isLoading}
    //       >
    //         {isLoading ? "Sending Funds..." : "Send Funds"}
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="flex justify-center items-center h-[70vh] ">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[40vw]">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Contribute to the campaign
          </label>

          <div className="flex gap-2 items-center">
            <label
              class="block text-gray-700 text-sm font-bold "
              for="username"
            >
              name
            </label>
            <h1 className="font-medium text-xl">{campaign.name}</h1>
          </div>
          <div className="flex gap-2 items-baseline mt-2">
            <label
              class="block text-gray-700 text-sm font-bold "
              for="username"
            >
              description
            </label>
            <p class="appearance-none rounded text-gray-700 leading-tight">
              {campaign.description}
            </p>
          </div>
          <div>
            <p className="text-gray-700 font-semibold">
              Amount: {campaign.targetAmount}
            </p>
            <p className="text-gray-700 font-semibold">
              funded: {campaign.currentAmount}
            </p>
          </div>
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Enter the amount
          </label>
          <input
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            onChange={onAmountChange}
            placeholder="$"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={sendAsset}
          >
            Send Funds
          </button>
          <a class="inline-block align-baseline font-bold text-sm">
            thanks for supporting
          </a>
        </div>
      </form>
    </div>
  );
};

export default JoinCard;
