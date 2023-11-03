// This componet Iterates over the element in the footer and displays them
import React from 'react';



/**
 * This structure defins the footer section data
 */
interface FooterSectionProps {
  title: string;
  content: string[];
}

/**
 * 
 * @param param0 It destructures the props from the footer component
 * @returns A jsx to display the data
 */
const FooterSection: React.FC<FooterSectionProps> = ({ title, content }) => {
  return (
    <div className="py-8"> 
      {/* padding on the top and bottom of the div. */}

      <h1 className="text-2xl font-bold hover:underline">{title}
        {/*This is used to style the text of the h1 tag including size */}
      </h1>

      {title === 'Navigation' || title === 'Privacy' ? (
        <ul className="list-none">
          {/* The "list-none" class removes default list styles*/}
          {content.map((item, itemIndex) => (
            <li className="hover:underline" key={itemIndex}>
              {/*This class underlines the list item text when hovering. */}
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      ) : (
        content.map((item, itemIndex) => (
          <p key={itemIndex}>{item}</p>
        ))
      )}
    </div>
  );
};

export default FooterSection;
