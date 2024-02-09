import { Card, Skeleton, message } from "antd";
import { getLogicDriver } from "js-moi-sdk";
import React, { useEffect, useRef, useState } from "react";
import { logicId } from "../interface/logic";

const Faucet = ({ wallet, updateWallet, showConnectModal }) => {
  const [isLoading, setLoading] = useState(false);
  const [isClaiming, setClaiming] = useState(false);
  const [refillTime, setRefillTime] = useState("00:00:00");
  const [error, setError] = useState("");
  const [tokenName, setTokenName] = useState("");
  const [claimAmount, setClaimAmount] = useState();
  const [nextClaim, setNextClaim] = useState();
  const [symbol, setSymbol] = useState();
  const [decimals, setDecimals] = useState();
  const logicRef = useRef(null);

  useEffect(() => {
    console.log("wallet", wallet);
    if (!wallet?.isInitialized()) {
      return;
    }

    const initLogic = async () => {
      setLoading(true);
      const logic = await getLogicDriver(logicId, wallet);
      logicRef.current = logic;

      const [
        { name },
        { symbol },
        { decimals },
        { claimAmount },
        { nextClaim },
      ] = await Promise.all([
        logic.routines.Name(),
        logic.routines.Symbol(),
        logic.routines.Decimals(),
        logic.routines.ClaimAmount(wallet.getAddress()),
        logic.routines.NextClaim(wallet.getAddress()),
      ]);

      setTokenName(name);
      setSymbol(symbol);
      setDecimals(decimals);
      setClaimAmount(claimAmount);
      setNextClaim(nextClaim);

      console.log({ name, symbol, decimals, claimAmount, nextClaim });
      setLoading(false);
    };

    initLogic();
  }, [wallet]);

  useEffect(() => {
    const id = setInterval(() => {
      setRefillTime(calculateRemainingTime());
    }, 1000);

    return () => clearInterval(id);
  }, [claimAmount]);

  const calculateRemainingTime = () => {
    // Get the current date and time in UTC
    const now = new Date();

    // Create a new Date object for 12:00 AM UTC
    const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    tomorrow.setUTCHours(0, 0, 0, 0);

    // Calculate the difference between now and 12:00 AM UTC
    const diff = tomorrow.getTime() - now.getTime();

    // Convert the difference to hours, minutes, and seconds
    const hours = Math.floor(diff / (60 * 60 * 1000));
    const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((diff % (60 * 1000)) / 1000);

    // Format the remaining time as a string in the "23:00:00" format
    const remainingTime = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    return remainingTime;
  };

  const onClaimHandler = async () => {
    try {
      if (logicRef.current == null) {
        return;
      }
      setClaiming(true);

      const ix = await logicRef.current.routines.Claim();
      await ix.wait();
      setClaiming(false);

      const [{ claimAmount }, { nextClaim }] = await Promise.all([
        logicRef.current.routines.ClaimAmount(wallet.getAddress()),
        logicRef.current.routines.NextClaim(wallet.getAddress()),
      ]);

      setClaimAmount(claimAmount);
      setNextClaim(nextClaim);

      console.log({ claimAmount, nextClaim });

      message.success("Claimed successfully", 2);
      setClaiming(false);
    } catch (error) {
      console.error(error);
      message.error("Failed to claim");
      setClaiming(false);
    }
  };

  return wallet ? (
    <div className="faucet">
      <Card classNames={"card"} type="primary" className=" ">
        <div className="">
          <Skeleton loading={isLoading} active paragraph={{ rows: 7 }} />
          {!isLoading && (
            <>
              <div className="">
                <div className=""></div>
                <div className="">
                  <div className="">Available Limit</div>
                  <h1>
                    {claimAmount} {tokenName}
                  </h1>
                </div>
              </div>
              <div className="">
                {" "}
                {error && <p className="">{error}</p>}
                <button className="btn btn--blue" onClick={onClaimHandler}>
                  Claim Tokens
                </button>
                {isClaiming && (
                  <p className="">
                    Please wait while the current request is being processed
                  </p>
                )}
                <div style={{ marginTop: "20px" }} className="">
                  Refills in {refillTime}
                </div>
              </div>
            </>
          )}
        </div>
      </Card>
    </div>
  ) : (
    <div className="connect-wallet">
      <div className="center">
        <h1>Connect Wallet</h1>
        <p>Please connect your wallet to continue</p>

        <div>
          <button
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
