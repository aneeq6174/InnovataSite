import React from "react";
import Detail3Image1 from "../assets/DetailsImg/Detail3/1.webp";
import Detail3Image2 from "../assets/DetailsImg/Detail3/2.webp";
import Detail3Image3 from "../assets/DetailsImg/Detail3/3.webp";
import Detail3Image4 from "../assets/DetailsImg/Detail3/4.webp";
import Detail3Image5 from "../assets/DetailsImg/Detail3/5.webp";
import Detail3Image6 from "../assets/DetailsImg/Detail3/6.webp";
import Detail3Image7 from "../assets/DetailsImg/Detail3/7.webp";
import Header from "../Components/Header";
import ContactUs from "../Components/ContactForm";
import ProjectGallery from "../Components/ProjectGallery";

const Detail3 = () => {
  return (
    <div className="h-auto">
      <Header style={{ zIndex: 9999 }} />
      <div className="h-[70vh] bg-cover bg-top flex items-center justify-center text-white" style={{ backgroundImage: `url(${Detail3Image1})` }}>
        <div className="bg-black bg-opacity-50 p-8 rounded-3xl">
          <h1 className="text-6xl font-bold">Architectural Design Services </h1>
        </div>
      </div>

      <div className="hero-2 mt-12 px-32">
        <div className="flex flex-wrap px-8 space-x-8 mt-10">
          <div className="w-full md:w-2/5 rounded-lg">
            <img src={Detail3Image2} alt="Second Image" className="rounded-2xl w-full h-auto object-cover" style={{ maxHeight: '300px' }} />
          </div>
          <div className="w-full md:w-2/5 pl-10 pt-10">
            <p className="text-5xl font-bold">Our best Luxurious Architectural Service In Dubai</p>
          </div>
        </div>

        <div className="flex flex-wrap px-8 mt-10 items-center justify-between">
          <div className="w-full md:w-3/5">
            <img src={Detail3Image3} alt="Third Image" className="rounded-2xl w-full h-auto object-cover" style={{ maxHeight: '300px' }} />
          </div>
          <div className="w-full md:w-2/5 pl-10 pt-10">
            <p className="text-2xl font-medium">
            Our architectural design team specializes in creating stunning, functional spaces that reflect modern Dubai's dynamic spirit. We combine innovative design principles with practical solutions to deliver exceptional results. 
            </p>
            </div>
        </div>
      </div>

      <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 xl:w-1/3 px-4">
              <div className="bg-white rounded-lg overflow-hidden mb-10">
                <img src={Detail3Image4} alt="image" className="w-full h-[300px] object-cover" />
                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                    <a href="javascript:void(0)" className="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary">
                    Technical Specifications 
                    </a>
                  </h3>
                  <ol className="text-base text-body-color leading-relaxed mb-7">
                    <li>•	Advanced 3D modeling and visualization  </li>
                    <li>•	BIM (Building Information Modeling) integration </li>
                    <li>•	Sustainable design principles  </li>
                  </ol>

                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 px-4">
              <div className="bg-white rounded-lg overflow-hidden mb-10">
                <img src={Detail3Image5} alt="image" className="w-full h-[300px] object-cover" />
                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                    <a href="javascript:void(0)" className="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary">
                    Key Services 
                    </a>
                  </h3>
                  <ol className="text-base text-body-color leading-relaxed mb-7">
                    <li>•	Concept development </li>
                    <li>•	Space planning  </li>
                    <li>•	Technical drawings  </li>
                  </ol>

                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 px-4">
              <div className="bg-white rounded-lg overflow-hidden mb-10">
                <img src={Detail3Image6} alt="image" className="w-full h-[300px] object-cover" />
                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                    <a href="javascript:void(0)" className="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary">
                    Why Choose Our Architectural Services 
                    </a>
                  </h3>
                  <ol className="text-base text-body-color leading-relaxed mb-7">
                    <li>•	Dubai Municipality approved designs </li>
                    <li>•	Sustainable architecture solutions  </li>
                    <li>•	Innovative space utilization  </li>
                  </ol>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectGallery />
      <ContactUs />
    </div>
  );
};

export default Detail3;
