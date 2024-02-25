import React from "react";
import { Link } from "react-router-dom";
function Services() {
  return (
    <>
      <section id="services">
        <div class="container p-4">
          <div class="grid md:grid-cols-2 grid-cols-1 sm:gap:10 md:gap-40 items-center">
            <div class="grid ">
              <div class="grid gap-10 md:pl-8 md:ml-4">
                <h2 class="display-3 ">
                  Craft Your Vision, Transform the Globe!
                </h2>
                <p class="plarge text-xl">
                  Whether you're an emerging entrepreneur bursting with
                  groundbreaking concepts, an artist yearning for backing in
                  your next endeavor, or a community leader igniting change, our
                  platform provides the means to inspire and unite supporters
                  globally.
                  <br />
                  <br /> Shape the world with your passion and creativity,
                  empowering others to join your cause and make a lasting
                  impact.
                </p>
              </div>
            </div>
            <div class="grid md:grid-cols-1 grid-cols-1 gap-10 items-start p-4 m-4">
              <div class="grid gap-16">
                <div class="grid gap-8">
                  <Link
                    className="text-3xl font-extrabold text-orange-500"
                    to={"/CreateCampaign"}
                  >
                    Create your own Campaign
                  </Link>
                  <p class="pregular">
                    With just a few clicks, you can create your own campaign,
                    sharing your passion, creativity, or cause with the world.
                  </p>
                </div>
              </div>
              <div class="grid gap-16">
                <div class="grid gap-8">
                  <Link
                    className="text-3xl font-extrabold text-orange-500"
                    to={"/ExploreCampaign"}
                  >
                    Explore campaigns
                  </Link>
                  <p class="pregular">
                    Participate in projects that resonate with their values and
                    aspirations.support and participate in projects across the
                    globe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
