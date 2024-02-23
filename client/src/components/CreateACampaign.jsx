import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logic from "../interface/logic";
import { toastError, toastSuccess } from "../utils/toastWrapper";

const Input = ({ ...props }) => (
  <input
    {...props}
    className={`${
      props.className || ""
    } w-full px-3 py-2 text-gray-500 bg-transparent outline-none border shadow-sm rounded-lg duration-150`}
  />
);

function Admin({ wallet, teas, Setteas }) {
  let [name, setName] = useState("");
  let [discription, setDiscription] = useState("");
  let [creater, setCreater] = useState("");
  let [EndTime, SetEndtime] = useState("");
  let [amount, setAmount] = useState("");
  const [error, setError] = useState("");

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
      toastSuccess(`Campaign Created ${campaign}`);
      const { id } = campaign;
      navigate(`./join/${id}`);
    } catch (error) {
      toastError(`Please Connect Wallet`);
    }
  };

  return (
    // <div className=" w-[100vw] h-[80vh]">
    //   <div className="pl-10">
    //     <h1 className="text-[2.5em]">Create A Campaign</h1>
    //     <div className="flex flex-col items-center  gap-2 w-[95%] h-[90%] border-2 rounded-md p-4 mt-2">
    //     <img className="md:hidden" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fENhbXBhaWdufGVufDB8fDB8fHww" alt="Create A Campaign"/>
    //       <input
    //         type="text"
    //         className="w-[50vw] border-3 rounded-md p-2"
    //         placeholder="Title for campaign"
    //         onChange={onNameChange}
    //       />
    //       <input
    //         type="text"
    //         className="w-[50vw] border-3 rounded-md p-2"
    //         placeholder="Amount  in numbers"
    //         onChange={onAmountChange}
    //       />
    //       <textarea
    //         type="text"
    //         className="w-[50vw] border-3 rounded-md p-2"
    //         placeholder="Enter Story for campaign"
    //         onChange={onDiscriptionChange}
    //       />
    //       <input
    //         type="text"
    //         className="w-[50vw] border-3 rounded-md p-2"
    //         placeholder="Creater"
    //         onChange={onCreaterChange}
    //       />
    //       <input
    //         type="text"
    //         className="w-[50vw] border-3 rounded-md p-2"
    //         placeholder="EndTime in hours"
    //         onChange={onEndTimeChange}
    //       />
    //       <button
    //         className="border-2 w-[50vw] h-[5vh] rounded-lg bg-orange-600 thisfknButton text-white"
    //         onClick={() => {
    //           createcamp();
    //         }}
    //       >
    //         Create Campaign !
    //       </button>
    //     </div>
    //   </div>
    // </div>
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
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5 font-medium"
            >
              <div>
                <label>Full name</label>
                <Input
                  aria-label="Full name"
                  type="text"
                  required
                  className="mt-2 focus:border-indigo-600"
                  onClick={onNameChange}
                />
              </div>
              <div>
                <label>Creator</label>
                <Input
                  required
                  className="mt-2 focus:border-indigo-600"
                  onClick={onCreaterChange}
                />
              </div>
              <div>
                <label>End Time</label>
                <Input
                  required
                  className="mt-2 focus:border-indigo-600"
                  onClick={onEndTimeChange}
                />
              </div>
              <div>
                <label>Amount</label>
                <Input
                  required
                  className="mt-2 focus:border-indigo-600"
                  onClick={onAmountChange}
                />
              </div>
              <div>
                <label>Discription</label>
                <textarea
                  aria-label="Message"
                  required
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  onClick={onDiscriptionChange}
                ></textarea>
                {error && <p className="text-red-500">{error}</p>}
              </div>

              <div className="pt-1">
                <button
                  className="w-full text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 py-2.5 px-4 text-center rounded-lg duration-150"
                  onClick={() => {
                    createcamp();
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
