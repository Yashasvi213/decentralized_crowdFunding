import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logic from "../interface/logic";
import { toastError, toastSuccess } from "../utils/toastWrapper";
import CircularProgress from "@mui/material/CircularProgress";
const Input = ({ ...props }) => (
  <input
    {...props}
    className={`${
      props.className || ""
    } w-full px-3 py-2 text-gray-500 bg-transparent outline-none border shadow-sm rounded-lg duration-150`}
  />
);

const JoinCard = ({ wallet }) => {
  const [amount, setAmount] = useState("");
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(false);
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
        console.log("foundCampaign", foundCampaign);
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
    try {
      if (!wallet) {
        return toastError("Please connect wallet");
      }
      if (!amount) {
        return toastError("Please enter an amount");
      }
      setLoading(true);
      let data = await logic.FundCampaign(wallet, id, amount);
      console.log("Funds sent successfully!");
      setLoading(false);
      toastSuccess("Funds sent successfully!");
    } catch (error) {
      setLoading(false);
      toastError("Error sending funds");
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
    <div className="pt-28 pb-12 max-w-screen-xl mx-auto px-4">
      <div className="custom-screen text-gray-600">
        <div className="max-w-lg mx-auto  justify-between lg:flex lg:flex-col lg:max-w-none">
          <div className="max-w-lg sm:text-center lg:text-left">
            <h1 className="text-gray-800 text-base font-semibold sm:text-lg mb-4">
              Contribute to the campaign
            </h1>
          </div>
          <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md lg:mt-0">
            <h1 className="text-gray-800 text-xl font-semibold sm:text-4xl">
              {campaign.name}
            </h1>
            <p className="mb-3">{campaign.description}</p>
            <h4 className="my-3 text-black">
              target amount: {campaign.targetAmount}
            </h4>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5 font-medium"
            >
              <div>
                <label>Amount</label>
                <Input
                  type="number"
                  required
                  className="mt-2 focus:border-indigo-600"
                  placholder="$"
                  onChange={onAmountChange}
                />
              </div>

              <div className="pt-1">
                <button
                  className="w-full text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 py-2.5 px-4 text-center rounded-lg duration-150"
                  onClick={sendAsset}
                >
                  {loading ? <CircularProgress size={"30px"} /> : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinCard;
