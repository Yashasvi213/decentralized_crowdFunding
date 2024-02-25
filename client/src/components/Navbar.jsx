import React, { useState, useEffect, useRef } from "react";
import { truncateStr } from "../utils/truncateStr";
import { Link } from "react-router-dom";
import OFI from "../assets/logos/OFI.png";

const Navbar = ({
  updateWallet,
  showConnectModal,
  wallet,
  tokenDetails,
  tokenBalance,
}) => {
  const [toggleValue, setToggle] = useState(false);

  const navRef = useRef(null);

  const handleToggle = () => {
    setToggle(!toggleValue);
  };

  const closeNavOnScroll = () => {
    if (toggleValue) {
      setToggle(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", closeNavOnScroll);
    return () => {
      window.removeEventListener("scroll", closeNavOnScroll);
    };
  }, [toggleValue]);

  return (
    <nav
      style={{ marginBottom: "0px" }}
      className="navbar sticky top-0 z-40 w-full backdrop-blur transition-colors duration-500 lg:z-50 lg:border-b lg:border-gray-100/20 dark:border-slate-100/[0.9] bg-white supports-backdrop-blur:bg-white/65 "
    >
      <div className="nav__header">
        <div
          onClick={handleToggle}
          className={
            (toggleValue && "nav__burger nav__burger--close") || "nav__burger"
          }
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <Link className="navbar__logo pl-4" to={"/ "}>
          <img src={OFI}></img>
        </Link>
      </div>
      <ul
        ref={navRef}
        className={
          (toggleValue && "nav__links nav__links--expanded") || "nav__links"
        }
      >
        <Link to={"/home"}>Home</Link>
        <Link to={"/JoinCampaign"}>Campaigns</Link>
        <Link to={"/faucet"}>Claim Faucet</Link>
        <a
          href={"https://moi.technology"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Built on MOI
        </a>
        {wallet && <button className="btn">{tokenBalance} $</button>}
        <button
          className="connect-button"
          onClick={wallet ? () => updateWallet() : () => showConnectModal(true)}
        >
          {wallet
            ? `Disconnect: ${wallet && truncateStr(wallet.getAddress(), 11)}`
            : "Connect"}
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
