import React from "react";
import Card from "./Card";
import Slider from "react-slick";
import { services } from "../../../data/Services";

const Services = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };

  return (
    <div className="w-full bg-[#E9F8F3B2] py-24">
      <div className="md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0">
        <div className="py-4">
          <h1 className="py-3 text-3xl font-bold">
            Our Signature <span className="text-[#20B486]">Service</span>{" "}
            Bundles
          </h1>
          <p className="text-[#6D737A]">
            All Services below here are very popular among our clients.
          </p>
        </div>

        <Slider {...settings} className="px-5">
          {services.map((service, i) => (
            <div key={i}>
              <Card service={service} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
