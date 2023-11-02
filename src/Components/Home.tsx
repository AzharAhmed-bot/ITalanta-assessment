//This component is responsible for the landing page of social impact


import Navbar from "./Navbar";
import Header from "./Header";
import Paragraph from "./Paragraph";

/**
 * Functional component for the home page.
 * @returns {JSX.Element} The home page component.
 */
export default function Home(): JSX.Element {
  // You can choose the sectionId based on your requirements
  const sectionId = "sections/socialImpact"; // Example: "invest", "about", "socialImpact"

  return (
    <div
    //This tailwind style is used to display the image on the landing page and fit it properly
      className="bg-cover bg-no-repeat bg-fixed bg-center h-screen"
      //This is an inline style for the background image url
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dyl3rncv3/image/upload/v1679910469/elewa-group-website/hero-Images/pexels-bg-edit_bb4znx.jpg)",
      }}
    >
      <Navbar />
      {/*This tailwind class style is responsible for centering the contents of the landing page*/}
      <div className="flex flex-col justify-center h-full">
        <Header section={sectionId} />  {/* Render the Header component with the specified sectionId */}
        <Paragraph section={sectionId}/>  {/* Render the Paragraph component with the specified sectionId */}
      </div>
    </div>
  );
}
