
//This component displays the footer section

import React from 'react';
import FooterData from '../FooterData';  // Importing data for the footer content.
import FooterSection from './FooterSection';  // Importing the previously defined FooterSection component.

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white rounded-lg mt-10">
      {/* The "bg-black" class sets the background color to black.
         The "text-white" class sets the text color to white.
         The "rounded-lg" class rounds the corners of the footer.
         The "mt-10" class adds margin-top with a value of 2.5rem. */}

      <div className="container mx-auto py-8">
        {/* The "container" class centers the content and limits its maximum width.
           The "mx-auto" class horizontally centers the container.
           The "py-8" class adds padding on the top and bottom with a value of 2rem. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 ">
          {/* The "grid" class sets up a grid layout.
             The number of columns in the grid depends on the screen size.
             "grid-cols-1" for small screens, "md:grid-cols-2" for medium screens, and "lg:grid-cols-5" for large screens.
             The "gap-6" class sets a gap between grid items with a value of 1.5rem. */}

          {FooterData.map((section, index) => (
            // Iterating through the FooterData and creating a FooterSection component for each section.
            <FooterSection key={index} title={section.title} content={section.content} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
