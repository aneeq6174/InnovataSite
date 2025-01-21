import React from "react";
import Detail1Image1 from "../assets/DetailsImg/Detail1/Detail1-1.webp"; // Importing the first image
import Detail1Image2 from "../assets/DetailsImg/Detail1/Detail1-2.webp"; // Importing the second image
import Detail1Image3 from "../assets/DetailsImg/Detail1/Detail1-3.webp"; // Importing the third image
import Bedroom from "../assets/DetailsImg/Detail1/Bedroom.webp"; // Importing the bedroom image
import Bath from "../assets/DetailsImg/Detail1/Bath.webp"; // Importing the bathroom image
import Kitchen from "../assets/DetailsImg/Detail1/Kitchen.webp"; // Importing the kitchen image
import Header from "../Components/Header";
import ContactUs from "../Components/ContactForm";
import ProjectGallery from "../Components/ProjectGallery";

const Detail1 = () => {
  return (
    <div className="h-auto">
      <Header style={{ zIndex: 9999 }} />

      {/* Hero Section */}
      <div
        className="h-[70vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${Detail1Image1})`, // Using the first imported image
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded">
          <h1 className="text-6xl font-bold">Luxury Interior Design Services</h1>
        </div>
      </div>

      {/* Hero-2 Section */}
      <div className="hero-2 mt-12 px-32"> {/* Added margin-top to space out the sections */}
        
        {/* First part of hero-2 */}
        <div className="flex flex-wrap px-8 space-x-8 mt-10"> {/* Flexbox with spacing between items */}
          <div className="w-full md:w-2/5 rounded-lg">
            <img src={Detail1Image2} alt="Second Image" className="rounded-2xl w-full h-auto object-cover" style={{ maxHeight: '300px' }} />
          </div>
          <div className="w-full md:w-2/5 pl-10 pt-10">
            <p className="text-5xl font-bold">
              Our Most Luxurious Interior Design Service In Dubai
            </p>
          </div>
        </div>

        {/* Second part of hero-2 */}
        <div className="flex flex-wrap px-8 mt-10 items-center justify-between"> {/* Added justify-between */}
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

      <div className="additional h-auto mt-32 px-40"> {/* Changed h-screen to h-auto to prevent overflow */}

        <div className="heading text-balck flex flex-col justify-center items-center">
          <p className="text-5xl font-semibold p-5">Specialized Services</p>
        </div>

        <div className="main-images w-full flex pt-20 justify-between">
          {/* Left image */}
          <div className="left-image w-1/3 flex items-center justify-center"> {/* Centering the left image vertically */}
            <img src={Bath} alt="Bathroom image" className="w-full h-auto object-cover rounded-lg pr-10" style={{ maxHeight: '500px' }} />
          </div>

          {/* Right images */}
          <div className="right-images w-2/3 flex flex-col space-y-6"> {/* Adjusted spacing */}
            <div className="upper-image w-full">
              <img src={Kitchen} alt="Kitchen Image" className="w-full h-auto object-cover rounded-lg" style={{ maxHeight: '250px' }} />
            </div>
            <div className="lower-image w-full">
              <img src={Bedroom} alt="Bedroom Image" className="w-full h-auto object-cover rounded-lg" style={{ maxHeight: '250px' }} />
            </div>
          </div>
        </div>
      </div>

      <ProjectGallery />
      <ContactUs /> {/* Added space to separate the form */}
    </div>
  );
};

export default Detail1;