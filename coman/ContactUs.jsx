import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-black text-white p-4 sm:p-8 md:p-16">
      <h1 className="text-3xl font-bold text-gray-500">Contact Us</h1>
      <h2 className="text-3xl font-bold mt-4">
        Let's connect over a virtual coffee
      </h2>

      <div className="flex flex-col lg:flex-row gap-10 mt-10">
        {/* Contact Form */}
        <div className="w-full lg:w-2/3">
          <form className="rounded-lg space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <input
                id="name"
                name="FullName"
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              <input
                id="email"
                name="Email"
                type="email"
                placeholder="Phone no"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <input
                id="phone"
                name="Email"
                type="tel"
                placeholder="Mobile Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              <input
                id="company"
                name="Company"
                type="text"
                placeholder="Select Service"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <textarea
              id="company"
              name="Company"
              type="text"
              placeholder="Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            ></textarea>
          </form>
        </div>

        {/* Next */}
        <div className="w-full lg:w-1/3">
          <h3 className="text-2xl font-bold text-gray-500 mb-4">
            What happens next?
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>Our sales team will get in touch within 24 hours.</li>
            <li>
              If required, we sign an NDA with you to assure the highest level
              of privacy.
            </li>
            <li>
              Once we have analyzed your business requirements, our sales team
              will provide you with the next steps.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
