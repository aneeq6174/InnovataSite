import React from "react";
import Detail2Image1 from "../assets/DetailsImg/Detail2/1.webp";
import Detail2Image2 from "../assets/DetailsImg/Detail2/2.webp";
import Detail2Image3 from "../assets/DetailsImg/Detail2/3.webp";
import Detail2Image4 from "../assets/DetailsImg/Detail2/4.webp";
import Detail2Image5 from "../assets/DetailsImg/Detail2/5.webp";
import Detail2Image6 from "../assets/DetailsImg/Detail2/6.webp";
import Detail2Image7 from "../assets/DetailsImg/Detail2/7.webp";
import Header from "../Components/Header";
import ContactUs from "../Components/ContactForm";
import ProjectGallery from "../Components/ProjectGallery";

const Detail2 = () => {
  return (
    <div className="h-auto">
      <Header style={{ zIndex: 9999 }} />
      <div className="h-[70vh] bg-cover bg-top flex items-center justify-center text-white" style={{ backgroundImage: `url(${Detail2Image4})` }}>
        <div className="bg-black bg-opacity-50 p-8 rounded-3xl">
          <h1 className="text-6xl font-bold">Custom Furniture Solutions</h1>
        </div>
      </div>

      <div className="hero-2 mt-12 px-32">
        <div className="flex flex-wrap px-8 space-x-8 mt-10">
          <div className="w-full md:w-2/5 rounded-lg">
            <img src={Detail2Image1} alt="Second Image" className="rounded-2xl w-full h-auto object-cover" style={{ maxHeight: '300px' }} />
          </div>
          <div className="w-full md:w-2/5 pl-10 pt-10">
            <p className="text-5xl font-bold">Our Most Custom Furniture Service In Dubai </p>
          </div>
        </div>

        <div className="flex flex-wrap px-8 mt-10 items-center justify-between">
          <div className="w-full md:w-3/5">
            <img src={Detail2Image2} alt="Third Image" className="rounded-2xl w-full h-auto object-cover" style={{ maxHeight: '300px' }} />
          </div>
          <div className="w-full md:w-2/5 pl-10 pt-10">
            <p className="text-2xl font-medium">
            Our custom furniture division specializes in creating unique pieces that perfectly match your space and style preferences. Each piece is meticulously crafted using premium materials and innovative designs.             </p>
          </div>
        </div>
      </div>

      <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 xl:w-1/3 px-4">
              <div className="bg-white rounded-lg overflow-hidden mb-10">
                <img src={Detail2Image5} alt="image" className="w-full h-[300px] object-cover" />
                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                    <a href="javascript:void(0)" className="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary">
                    •	Perfectly fitted to your space 
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 px-4">
              <div className="bg-white rounded-lg overflow-hidden mb-10">
                <img src={Detail2Image6} alt="image" className="w-full h-[300px] object-cover" />
                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                    <a href="javascript:void(0)" className="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary">
                    •	Premium material selection 
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 px-4">
              <div className="bg-white rounded-lg overflow-hidden mb-10">
                <img src={Detail2Image7} alt="image" className="w-full h-[300px] object-cover" />
                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                    <a href="javascript:void(0)" className="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary">
                    •	Expert craftsmanship 
                    </a>
                  </h3>
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

export default Detail2;
