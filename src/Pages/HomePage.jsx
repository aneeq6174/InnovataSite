import React from "react";
import HeroSection from "../Components/Hero";
import ServiceSection from "../Components/Services";
import PortfolioGallery from "../Components/Portfolio";
import ProjectGallery from "../Components/ProjectGallery";
import HowWeDeliverSection from "../Components/HowDeliver";
import AboutUs from "../Components/About";
import ContactUs from "../Components/ContactForm";
import Testimonial from "../Components/Testimonial";
import CoreServics from "../Components/CoreServics";
import WhyChooseSection from "../Components/WhyChoose";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <WhyChooseSection/>
      <ProjectGallery />
      <HowWeDeliverSection />
      <AboutUs />
      <Testimonial />
      <ContactUs />
    </div>
  );
}

export default HomePage;
