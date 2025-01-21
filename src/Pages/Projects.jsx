// import React from "react";
// import HeroSection from "../Components/HeroForOthers";
// import ContactForm from "../Components/ContactForm";

// import Pintrest from "../Components/Pintrest";
// import Header from "../Components/Header";
// import Feature from "../Components/Feature";

// function Projects() {
//   return (
//     <div>
//       <Header />
//       <Feature />
//       <Pintrest />
//       <ContactForm />
//     </div>
//   );
// }

// export default Projects;






import React from "react";
import HeroSection from "../Components/HeroForOthers";
import ContactForm from "../Components/ContactForm";

import Pintrest from "../Components/Pintrest";
import ProjectHeader from "../Components/ProjectHeader";
import Header from "../Components/Header";
import ProjectGallery from "../Components/ProjectGallery";

function Projects() {
  return (
    <div>
      <Header />
      <ProjectHeader/>
      <ProjectGallery />
      <Pintrest />
      <ContactForm />
    </div>
  );
}

export default Projects;
