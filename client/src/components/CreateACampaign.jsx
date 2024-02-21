import Lottie from "lottie-react";
import loginAnimation from "../assets/loginAnimation.json";
import createcampAnimation from "../assets/createcampAnimation.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logic from "../interface/logic";
import { toastError, toastSuccess } from "../utils/toastWrapper";

function Admin({ wallet, teas, Setteas }) {
  let [name, setName] = useState("");
  let [discription, setDiscription] = useState("");
  let [creater, setCreater] = useState("");
  let [EndTime, SetEndtime] = useState("");
  let [amount, setAmount] = useState("");

  const navigate = useNavigate();

  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onDiscriptionChange = (e) => {
    setDiscription(e.target.value);
  };
  const onAmountChange = (e) => {
    setAmount(e.target.value);
  };
  const onCreaterChange = (e) => {
    setCreater(e.target.value);
  };
  const onEndTimeChange = (e) => {
    const milli = e.target.value * 60 * 60 * 1000;
    const date = new Date(e.target.value).getTime();
    console.log(milli);
    //
    SetEndtime(milli);
  };

  const createcamp = async () => {
    try {
      const campaign = await logic.CreateCampaign(
        wallet,
        name,
        discription,
        amount,
        EndTime
      );
      console.log(campaign);
    } catch (error) {
      toastError(`Please Connect Wallet`);
    }
  };

  return (
    <div className=" w-[100vw] h-[80vh]">
      <div className="pl-10">
        <h1 className="text-[2.5em]">Create A Campaign</h1>

        <div className="flex flex-col items-center  gap-2 w-[95%] h-[90%] border-2 rounded-md p-4 mt-2">
          <input
            type="text"
            className="w-[50vw] border-3 rounded-md p-2"
            placeholder="Title for campaign"
            onChange={onNameChange}
          />
          <input
            type="text"
            className="w-[50vw] border-3 rounded-md p-2"
            placeholder="Amount  in numbers"
            onChange={onAmountChange}
          />
          <textarea
            type="text"
            className="w-[50vw] border-3 rounded-md p-2"
            placeholder="Enter Story for campaign"
            onChange={onDiscriptionChange}
          />
          <input
            type="text"
            className="w-[50vw] border-3 rounded-md p-2"
            placeholder="Creater"
            onChange={onCreaterChange}
          />
          <input
            type="text"
            className="w-[50vw] border-3 rounded-md p-2"
            placeholder="EndTime in hours"
            onChange={onEndTimeChange}
          />
          <button
            className="border-2 w-[50vw] h-[5vh] rounded-lg bg-orange-600 thisfknButton text-white"
            onClick={() => {
              createcamp();
            }}
          >
            Create Campaign !
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
