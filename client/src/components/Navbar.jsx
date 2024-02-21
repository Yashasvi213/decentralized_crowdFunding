import React, { useState, useEffect, useRef } from "react";
import { truncateStr } from "../utils/truncateStr";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import teaAnimation from "../assets/teaAnimation.json";

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
    <nav style={{marginBottom:'0px'}} className="navbar sticky top-0 z-40 w-full backdrop-blur transition-colors duration-500 lg:z-50 lg:border-b lg:border-gray-100/20 dark:border-slate-100/[0.9] bg-white supports-backdrop-blur:bg-white/65 dark:bg-yellow-50/70">
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
        <Link className="navbar__logo" to={"/ "}>
          <span className="p-3 text-center  border-orange-500/40 border-4 rounded-full hover:bg-orange-400/20 hover:border-sky-500/40 transition bg-sky-500/20">OFI</span>
        </Link>
      </div>
      <ul
        ref={navRef}
        className={
          (toggleValue && "nav__links nav__links--expanded") || "nav__links"
        }
      >
        <Link to={"/home"}>Home</Link>
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
