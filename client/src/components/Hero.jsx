import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const initial = {
  opacity: 0,
  y: 100,
};
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.5,
  },
};
function Hero(props) {
  return (
    <>
      <section {...props}>
        <div className="custom-screen py-28 text-gray-600">
          <div className="space-y-5 max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl"
              initial={initial}
              animate={animate}
            >
              Raise Funds for Your Business and Ideas
            </motion.h1>
            <motion.p
              className="max-w-xl mx-auto"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.5,
                },
              }}
            >
              Create a campaign to raise funds for your business, project, or
              idea. Join a campaign to support a cause you believe in.
            </motion.p>
            <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.9,
                  },
                }}
              >
                <Link
                  to={"/CreateCampaign"}
                  className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 py-2.5 px-4 text-center rounded-lg duration-150"
                >
                  Create Your Campaign !
                </Link>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 1.3,
                  },
                }}
              >
                <Link
                  href="#cta"
                  className="text-gray-700 border hover:bg-gray-50 py-2.5 px-4 text-center rounded-lg duration-150"
                  to={"/JoinCampaign"}
                >
                  Explore Campaigns
                </Link>
              </motion.div>
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
