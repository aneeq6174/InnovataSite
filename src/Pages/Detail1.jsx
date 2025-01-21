import React from "react";
import Detail1Image1 from "../assets/DetailsImg/Detail1/Detail1-1.webp";
import Detail1Image2 from "../assets/DetailsImg/Detail1/Detail1-2.webp";
import Detail1Image3 from "../assets/DetailsImg/Detail1/Detail1-3.webp";
import Bedroom from "../assets/DetailsImg/Detail1/Bedroom.webp";
import Bath from "../assets/DetailsImg/Detail1/Bath.webp";
import Kitchen from "../assets/DetailsImg/Detail1/Kitchen.webp";
import Header from "../Components/Header";
import ContactUs from "../Components/ContactForm";
import ProjectGallery from "../Components/ProjectGallery";

const Detail1 = () => {
  return (
    <div className="h-auto">
      <Header style={{ zIndex: 9999 }} />
      <div className="h-[70vh] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: `url(${Detail1Image1})` }}>
        <div className="bg-black bg-opacity-50 p-8 rounded">
          <h1 className="text-6xl font-bold">Luxury Interior Design Services</h1>
        </div>
      </div>

      <div className="hero-2 mt-12 px-32">
        <div className="flex flex-wrap px-8 space-x-8 mt-10">
          <div className="w-full md:w-2/5 rounded-lg">
            <img src={Detail1Image2} alt="Second Image" className="rounded-2xl w-full h-auto object-cover" style={{ maxHeight: '300px' }} />
          </div>
          <div className="w-full md:w-2/5 pl-10 pt-10">
            <p className="text-5xl font-bold">Our Most Luxurious Interior Design Service In Dubai</p>
          </div>
        </div>

        <div className="flex flex-wrap px-8 mt-10 items-center justify-between">
          <div className="w-full md:w-3/5">
            <img src={Detail1Image3} alt="Third Image" className="rounded-2xl w-full h-auto object-cover" style={{ maxHeight: '300px' }} />
          </div>
          <div className="w-full md:w-2/5 pl-10 pt-10">
            <p className="text-2xl font-medium">
              At Innovita Technical Service LLC, we understand that your interior space is a reflection of your personality and aspirations. Our Best luxurious interior design services blend functionality with aesthetics to create inspiring spaces that enhance your lifestyle.
            </p>
          </div>
        </div>
      </div>

      <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 xl:w-1/3 px-4">
              <div className="bg-white rounded-lg overflow-hidden mb-10">
                <img src={Bath} alt="image" className="w-full h-[300px] object-cover" />
                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                    <a href="javascript:void(0)" className="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary">
                    Bathroom Design
                    </a>
                  </h3>
                  <ol className="text-base text-body-color leading-relaxed mb-7">
                    <li>•	High-end fixture selection </li>
                    <li>•	Custom vanity designs  </li>
                    <li>•	Premium tiling work </li>
                  </ol>

                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 px-4">
              <div className="bg-white rounded-lg overflow-hidden mb-10">
                <img src={Kitchen} alt="image" className="w-full h-[300px] object-cover" />
                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                    <a href="javascript:void(0)" className="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary">
                    Kitchen Design 
                    </a>
                  </h3>
                  <ol className="text-base text-body-color leading-relaxed mb-7">
                    <li>•	Custom cabinetry  </li>
                    <li>•	Smart appliance integration </li>
                    <li>•	Premium countertops </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 px-4">
              <div className="bg-white rounded-lg overflow-hidden mb-10">
                <img src={Bedroom} alt="image" className="w-full h-[300px] object-cover" />
                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                    <a href="javascript:void(0)" className="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary">
                    Bedroom Design 
                    </a>
                  </h3>
                  <ol className="text-base text-body-color leading-relaxed mb-7">
                    <li>•	Custom headboard and wall treatments </li>
                    <li>•	Built-in wardrobe systems</li>
                    <li>•	Premium lighting design </li>
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

export default Detail1;
