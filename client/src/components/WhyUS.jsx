import React from "react";
import Services from "./Services";

function WhyUS() {
  return (
    <div className="flex flex-col items-center">
      <span className="relative flex justify-center mt-8">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

        <span className="relative z-10 bg-white px-6">Why choose OFI</span>
      </span>

      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="blockchain technology"
                  src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-3xl mb-4 font-bold sm:text-3xl">
                  Organise your croudfunding with Our Secure and Transparent
                  Platform
                </h2>

                <p className="mt-4 text-xl text-gray-600">
                  Our platform is not only is it free to use, but it's also
                  open-source, ensuring transparency and accountability at every
                  step.
                </p>
                <p className="mt-4 text-xl text-gray-600">
                  Powered by Web3 technology, our platform offers unrivaled
                  security, safeguarding your data and transactions with the
                  highest standards of encryption
                </p>
                <a
                  href="/#services"
                  className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                >
                  See Services
                </a>
              </div>
            </div>
          </div>
          <Services />
        </div>
      </section>
    </div>
  );
}

export default WhyUS;
