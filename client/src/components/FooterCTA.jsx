import { Link } from "react-router-dom";
import SectionWrapper from "./SectionWrapper";

const FooterCTA = () => (
  <SectionWrapper>
    <div className="custom-screen">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
          Connect your wallet and start claim your faucets
        </h2>
        <p className="mt-3 text-gray-600">
          Connect your wallet to start claiming your faucets. You can claim
          faucets every 10 minutes.
        </p>
        <Link
          to="/faucet"
          className="mt-4 inline-block font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 py-2.5 px-4 text-center rounded-lg duration-150"
        >
          Claim Faucets
        </Link>
      </div>
    </div>
  </SectionWrapper>
);

export default FooterCTA;
