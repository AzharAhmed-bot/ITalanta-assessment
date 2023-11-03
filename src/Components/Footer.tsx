
//This component displays the footer section

import React from 'react';
import FooterData from '../FooterData';  // Importing data for the footer content.
import FooterSection from './FooterSection';  // Importing the previously defined FooterSection component.


/**
 * Footer component
 * @returns a json format for the footer
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white rounded-lg mt-10">
      {/*The style is used  style the ttext and card by rounding the edges*/}

      <div className="container mx-auto py-8">
        {/* This style provides a padding anf centers the container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 ">
          {/*This style is used to display the footer in grid format */}

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
