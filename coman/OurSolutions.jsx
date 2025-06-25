import React from "react";

const OurSolutions = () => {
  return (
    <>
      <div className="bg-black text-white p-16 ">
        <div className="flex-col">
          <h1 className="text-4xl ">Our Solutions</h1>
          <p className="mt-4 text-[18px] text-gray-400 leading-[1.2]">
            Linkfields offers industry-specific tailored solutions that benefit
            your business, increasing productivity, improving the quality of
            your application development and streamlining operations. Our
            automation and analytics solutions enhance decision making
            capabilities and improve return on investment.
          </p>
        </div>
        {/* box section */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20  text-gray-400 text-[18px]">
          <div className="border-0 p-4 rounded-2xl  ">
            <img
              className="h-20 w-30 sm-h-20"
              src="https://www.linkfields.com/_next/image?url=https%3A%2F%2Fimages-linkfields-poc.s3.eu-west-2.amazonaws.com%2FSAP.png&w=1920&q=75"
              alt=""
            />
            <p>
              We specialize in harnessing the power of SAP’s latest release,
              S/4HANA, for your business’s unique needs.
            </p>
            <h1 className="text-orange-400 text-[20px] mt-4">
              Read more
              <span>
                <i className="ri-arrow-right-line"></i>
              </span>{" "}
            </h1>
          </div>
          <div className="border-0 p-4 rounded-2xl  ">
            <img
              className="h-20 w-30 sm-h-20"
              src="https://www.linkfields.com/_next/image?url=https%3A%2F%2Fimages-linkfields-poc.s3.eu-west-2.amazonaws.com%2Fodoo.png&w=1920&q=75"
              alt=""
            />
            <p>
              From business process reengineering to seamless integration, we
              redefine efficiency for your enterprise.
            </p>
            <h1 className="text-orange-400 text-[20px] mt-4">
              Read more
              <span>
                <i className="ri-arrow-right-line"></i>
              </span>{" "}
            </h1>
          </div>
          <div className="border-0 p-4 rounded-2xl  ">
            <img
              className="h-20 w-30 sm-h-20"
              src="https://www.linkfields.com/_next/image?url=https%3A%2F%2Fimages-linkfields-poc.s3.eu-west-2.amazonaws.com%2FMicrosoft%20dynamics.png&w=1920&q=75"
              alt=""
            />
            <p>
              Embrace intelligent business applications that integrate your
              operations with predictive insights.
            </p>
            <h1 className="text-orange-400 text-[20px] mt-4">
              Read more
              <span>
                <i className="ri-arrow-right-line"></i>
              </span>{" "}
            </h1>
          </div>
          <div className="border-0 p-4 rounded-2xl  ">
            <img
              className="h-20 w-30 sm-h-20"
              src="https://www.linkfields.com/_next/image?url=https%3A%2F%2Fimages-linkfields-poc.s3.eu-west-2.amazonaws.com%2Fsalesforce-newone.png&w=1920&q=75"
              alt=""
            />
            <p>
              Streamlined CRM for efficient sales, marketing automation, and
              driving growth in today's competitive market.
            </p>
            <h1 className="text-orange-400 text-[20px] mt-4">
              Read more
              <span>
                <i className="ri-arrow-right-line"></i>
              </span>{" "}
            </h1>
          </div>
          <div className="border-0 p-4 rounded-2xl  ">
            <img
              className="h-20 w-30 sm-h-20"
              src="https://www.linkfields.com/_next/image?url=https%3A%2F%2Fimages-linkfields-poc.s3.eu-west-2.amazonaws.com%2FiPaas.png&w=1920&q=75"
              alt=""
            />
            <p>
              With our extensive range of iPaaS products, we ensure a
              comprehensive approach to each implementation.
            </p>
            <h1 className="text-orange-400 text-[20px] mt-4">
              Read more
              <span>
                <i className="ri-arrow-right-line"></i>
              </span>{" "}
            </h1>
          </div>
          <div className="border-0 p-4 rounded-2xl  ">
            <img
              className="h-20 w-30 sm-h-20"
              src="https://www.linkfields.com/_next/image?url=https%3A%2F%2Fimages-linkfields-poc.s3.eu-west-2.amazonaws.com%2FRPA-new.png&w=1920&q=75"
              alt=""
            />
            <p>
              Easy building, deployment, and management of software robots that
              finish up redundant tasks for you.
            </p>
            <h1 className="text-orange-400 text-[20px] mt-4">
              Read more
              <span>
                <i className="ri-arrow-right-line"></i>
              </span>{" "}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSolutions;
