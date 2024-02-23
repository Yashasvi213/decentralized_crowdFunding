import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <section>
        <div className="custom-screen py-28 text-gray-600">
          <div className="space-y-5 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
              Build and scale your next business idea faster
            </h1>
            <p className="max-w-xl mx-auto">
              Blinder making it simple for you to build and grow your SaaS
              applications, or any business idea.
            </p>
            <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
              <Link
                to={"/CreateCampaign"}
                className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 py-2.5 px-4 text-center rounded-lg duration-150"
              >
                Create Your Campaign !
              </Link>
              <Link
                href="#cta"
                className="text-gray-700 border hover:bg-gray-50 py-2.5 px-4 text-center rounded-lg duration-150"
                to={"/JoinCampaign"}
              >
                Explore Campaigns
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

{
  /* <Link
                className="self-center p-4 px-[3em] rounded-xl hover:bg-sky-500 bg-orange-500"
                to={"/CreateCampaign"}
              >
                Create Your Campaign !
              </Link>

              <Link
                className="self-center p-4 px-[4em] rounded-xl transition bg-gray-200 hover:bg-sky-500"
                to={"/JoinCampaign"}
              >
                Explore Campaigns{" "}
              </Link> */
}
