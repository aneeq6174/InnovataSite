import React, { useEffect, useState } from "react";
import G1 from "../assets/servicePage/G1.jpg";
import G2 from "../assets/servicePage/G2.jpg";
import G3 from "../assets/servicePage/G3.png";
import G4 from "../assets/servicePage/G4.png";

const services1 = [
  { id: 1, image: G1, title: "Projects 1", description: "•	Luxury Villa Transformations " },
  { id: 2, image: G2, title: "Projects 2", description: "•	Smart Home Installations " },
  { id: 3, image: G3, title: "Projects 3", description: "•	Interior Design Projects " },
  { id: 4, image: G4, title: "Projects 4", description: "•	Outdoor Living Spaces " }
];

const services2 = [
  { id: 5, image: G1, title: "Projects 5", description: "•	Office Renovations " },
  { id: 6, image: G2, title: "Projects 6", description: "•	Retail Space Design " },
  { id: 7, image: G3, title: "Projects 7", description: "•	Restaurant Fitouts " },
  { id: 8, image: G4, title: "Projects 8", description: "•	Industrial Facilities " }
];

const Feature = () => {
  const [isInView, setIsInView] = useState(false);

  // Scroll animation detection
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('feature-section');
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsInView(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to render the service cards
  const renderServices = (services) => {
    return services.map((service) => (
      <div key={service.id} className="card w-full flex flex-col items-center justify-between transition-all duration-500 hover:scale-105 bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-96 object-cover"
        />
        <div className="p-6 text-center flex flex-col justify-center items-center">
          <p className="text-xl text-black mt-4">{service.description}</p>
        </div>
      </div>
    ));
  };

  return (
    <section id="feature-section" className="py-20 bg-gray-100">
      {/* Main heading */}
      <div className={`text-start mt-12 mb-12 transition-opacity duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-2xl md:text-5xl font-bold text-white bg-black inline-block py-4 px-6  shadow-lg">
          Our Featured Projects :
        </h2>
      </div>

      {/* First Sub Heading */}
      <div className="mb-16 px-4">
        <h3 className="text-2xl font-semibold text-center underline mb-8">• Popular Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {renderServices(services1)}
        </div>
      </div>

      {/* Second Sub Heading */}
      <div className="mb-16 mt-32 px-4">
        <h3 className="text-2xl font-semibold text-center underline mb-8">• Additional Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {renderServices(services2)}
        </div>
      </div>
    </section>
  );
};

export default Feature;
