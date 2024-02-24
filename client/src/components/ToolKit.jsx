import SectionWrapper from "./SectionWrapper";

const ToolKit = () => {
  const features = [
    {
      title: "Best blockchain network",
      desc: "MOI is built on the best blockchain network in the world",
    },
    {
      title: "",
      desc: "Perform small but crucial tasks as a Citizen to spread awareness about MOI",
    },
    {
      title: "Guardian Node",
      desc: "Run a MOI Pod to validate transactions and secure the MOI network",
    },
    {
      title: "MOI Nation",
      desc: "Perform small but crucial tasks as a Citizen to spread awareness about MOI",
    },
    {
      title: "MOI Ambassador",
      desc: "Nurture and support the MOI community by educating and connecting members",
    },
    {
      title: "Community Hangouts",
      desc: "Dive into engaging discussions about MOI on our outreach channels",
    },
  ];

  return (
    <SectionWrapper>
      <div
        id="toolkit"
        className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8"
      >
        <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
          <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Work with the best toolkit
          </h2>
          <p>These are a few of our favourite things</p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li key={idx} className="flex gap-x-4">
                <div>
                  <h4 className="text-lg text-gray-800 font-semibold">
                    {item.title}
                  </h4>
                  <p className="mt-3">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ToolKit;
