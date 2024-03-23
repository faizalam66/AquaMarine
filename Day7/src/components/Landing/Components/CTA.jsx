import React from "react";
import { cta } from "../../../assets";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="w-full bg-[#E9F8F3] py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px] items-center  px-4 md:px-0">
        <img src={cta} className="w-[650px] mx-auto" />
        <div>
          <h1 className="py-2 text-3xl font-semibold">
            Elevate Your Experience with{" "}
            <span className="text-[#20B486]">World-Class</span> Home Care
            Services!
          </h1>
          <p className="py-2 text-lg text-gray-600">
            Start using our services by registering for free
          </p>
          <Link to='/register/email'>
          <button className="max-[780px]:w-full my-4 px-8 py-5 rounded-md bg-[#20B486] text-white font-bold">
            Sign Up For Free
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
