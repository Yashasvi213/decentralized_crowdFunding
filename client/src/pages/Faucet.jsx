import { Card, Skeleton, message } from "antd";
import { getLogicDriver } from "js-moi-sdk";
import React, { useEffect, useRef, useState } from "react";
import logic, { logicId } from "../interface/logic";
import { toastError, toastSuccess } from "../utils/toastWrapper";
import Loader from "../components/Loader";
import { calculateRemainingTime } from "../utils/CalculateTimer";
import login from "../assets/login.jpg";

const Faucet = ({
  wallet,
  showConnectModal,
  updateTokenBalance,
  tokenDetails,
  tokenBalance,
}) => {
  const [isLoading, setLoading] = useState(false);
  const [isClaiming, setClaiming] = useState(false);
  const [refillTime, setRefillTime] = useState("00:00:00");
  const [error, setError] = useState("");
  const [claimAmount, setClaimAmount] = useState();
  const [nextClaim, setNextClaim] = useState();

  useEffect(() => {
    if (!wallet) return;

    const initDetails = async () => {
      setLoading(true);

      const [{ claimAmount }, { nextClaim }] = await Promise.all([
        logic.GetTokenClaimAmount(wallet.getAddress()),
        logic.GetNextClaim(wallet.getAddress()),
      ]);

      setClaimAmount(claimAmount);
      setNextClaim(nextClaim);
      setLoading(false);
    };

    initDetails();
  }, [wallet]);

  useEffect(() => {
    const id = setInterval(() => {
      setRefillTime(calculateRemainingTime(nextClaim));
    }, 1000);

    return () => clearInterval(id);
  }, [nextClaim]);

  const onClaimHandler = async () => {
    try {
      setClaiming(true);
      console.log("Claiming tokens");
      await logic.ClaimToken(wallet);
      const { nextClaim } = await logic.GetNextClaim(wallet.getAddress());
      console.log(nextClaim);
      setNextClaim(nextClaim);
      updateTokenBalance(tokenBalance + claimAmount);
      toastSuccess(`Claimed ${claimAmount} successfully`);
      setClaiming(false);
    } catch (error) {
      console.log("Error claiming tokens", error);
      toastError(error.message);
      setClaiming(false);
    }
  };

  return wallet ? (
    <div className="h-[85vh] flex justify-center items-center">
      <div className="w-[40%] h-[80%] flex items-center ">
        <Card classNames={"card"} type="primary" className="w-[100%]  border-2 shadow-lg p-8
">
          
          <div className="   ">
            
            <Skeleton loading={isLoading} active paragraph={{ rows: 7 }} />
            {!isLoading && (
              <><div>
                <div className="">
                  <div className=""></div>
                  <div className="">
                    <h2 className="">Available Limit</h2>
                    <h1>{refillTime === "00:00:00" ? claimAmount : 0} $</h1>
                  </div>
                </div>
                <div className="">
                  {" "}
                  {error && <p className="">{error}</p>}
                  <button
                    disabled={refillTime !== "00:00:00"}
                    className="btn btn--blue"
                    onClick={onClaimHandler}
                  >
                    <span>Claim Tokens</span>
                    <Loader loading={isClaiming} size={25} color="#fff" />
                  </button>
                  {isClaiming && (
                    <p className="">
                      Please wait while the current request is being processed
                    </p>
                  )}
                  <div style={{ marginTop: "20px" }} className="">
                    Refills in {refillTime}
                  </div>
                  <div>
                    <p className="font-bold">Claim Tokens to Support the campaigns!</p>
                  </div>
                </div>
                </div>
              </>
            )}
          </div>
        </Card>
      </div>
    </div>
  ) : (
    <div className="connect-wallet">
      <div
        className="center"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ height: 400 }}>
          <img src={login} alt="" />
        </div>
        <h4>Please connect your wallet to continue</h4>

        <div>
          <button
            style={{ marginTop: "2vh" }}
            className="btn btn--blue"
            onClick={() => {
              showConnectModal(true);
            }}
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faucet;
