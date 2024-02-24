import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logic from "../interface/logic";
import { toastError, toastSuccess } from "../utils/toastWrapper";
import CircularProgress from "@mui/material/CircularProgress";
function Admin({ wallet, teas, Setteas }) {
  let [name, setName] = useState("");
  let [discription, setDiscription] = useState("");
  let [creater, setCreater] = useState("");
  let [EndTime, SetEndtime] = useState();
  let [amount, setAmount] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onDiscriptionChange = (e) => {
    const { value } = e.target;
    setDiscription(value);
    const wordCount = value.trim().split(/\s+/).length;

    // Check if word count is less than 50
    if (wordCount < 50) {
      setError("Description must contain at least 50 words");
    } else {
      setError("");
    }
  };
  const onAmountChange = (e) => {
    setAmount(e.target.value);
  };
  const onCreaterChange = (e) => {
    setCreater(e.target.value);
  };
  const onEndTimeChange = (e) => {
    const milli = e.target.value * 60 * 60 * 10000;
    console.log(milli);
    SetEndtime(milli);
  };

  const createcamp = async () => {
    try {
      if (!name) {
        return toastError("Please enter an name");
      }
      if (!amount) {
        return toastError("Please enter an amount");
      }
      if (!EndTime) {
        return toastError("Please enter an End Time");
      }
      if (!discription) {
        return toastError("Please enter an discription");
      }
      if (!wallet) {
        return toastError("Please connect wallet");
      }
      setLoading(true);
      const campaign = await logic.CreateCampaign(
        wallet,
        name,
        discription,
        amount,
        EndTime
      );
      console.log(campaign);
      toastSuccess(`Campaign Created ${campaign}`);
      setLoading(false);
    } catch (error) {
      toastError(`Please Connect Wallet`);
    }
  };

  return (
    <div className="pt-28 pb-12 max-w-screen-xl mx-auto px-4">
      <div className="custom-screen text-gray-600">
        <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
          <div className="max-w-lg sm:text-center lg:text-left">
            <h1 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Create Your Own Campaign
            </h1>
            <p className="mt-3">
              Create a campaign to raise funds for your business, project, or
              idea.
              <Link
                to={"/https://twitter.com/MOI_Tech"}
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 hover:text-indigo-400 font-medium duration-150"
              >
                <span className="text-gray-600"> contact for support </span>
                @MOI_Tech
              </Link>
            </p>
          </div>
          <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md lg:mt-0">
            <div className="space-y-5 font-medium">
              <div>
                <label>Full name</label>
                <input
                  required
                  type="text"
                  className="w-full px-3 py-2 text-gray-500 bg-transparent outline-none border shadow-sm rounded-lg duration-150 mt-2 focus:border-indigo-600"
                  onChange={onNameChange}
                />
              </div>
              <div>
                <label>Creator</label>
                <input
                  required
                  type="text"
                  className="w-full px-3 py-2 text-gray-500 bg-transparent outline-none border shadow-sm rounded-lg duration-150 mt-2 focus:border-indigo-600"
                  onChange={onCreaterChange}
                />
              </div>
              <div>
                <label>End Time</label>
                <input
                  type="number"
                  required
                  className="w-full px-3 py-2 text-gray-500 bg-transparent outline-none border shadow-sm rounded-lg duration-150 mt-2 focus:border-indigo-600"
                  onChange={onEndTimeChange}
                />
              </div>
              <div>
                <label>Amount</label>
                <input
                  type="number"
                  required
                  className="w-full px-3 py-2 text-gray-500 bg-transparent outline-none border shadow-sm rounded-lg duration-150 mt-2 focus:border-indigo-600"
                  onChange={onAmountChange}
                />
              </div>
              <div>
                <label>Discription</label>
                <textarea
                  type="text"
                  aria-label="Message"
                  required
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  onChange={onDiscriptionChange}
                ></textarea>
                {error && <p className="text-red-500">{error}</p>}
              </div>

              <div className="pt-1">
                <button
                  className="w-full text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 py-2.5 px-4 text-center rounded-lg duration-150 "
                  onClick={() => {
                    createcamp();
                  }}
                >
                  {loading ? (
                    <CircularProgress size={"30px"} />
                  ) : (
                    "Create Campaign"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
