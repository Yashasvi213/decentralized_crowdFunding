import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <section className="relative  bg-[url(https://plus.unsplash.com/premium_photo-1663100244280-063bffeccd1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat">
        <div className="absolute  backdrop-blur-sm inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:w-screen lg:items-center lg:px-8">
          <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-4xl font-extrabold text-white">
              Let's Launch Your Dream.
              <strong className="block font-extrabold text-black  bg-yellow-300/40 ">
                {" "}
                Crowdfund your passion, spark innovation.{" "}
              </strong>
            </h1>

            <p className="mt-8 mb-0 text-2xl text-white">
              Unleash your ideas, ignite support, and make an impact. Our
              platform empowers you to create & share your campaign with the
              world. <br />
              <br />
            </p>
            <p className="text-2xl  font-bold">
              Explore inspiring campaigns or launch your own together, we can
              make anything possible.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link
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
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
