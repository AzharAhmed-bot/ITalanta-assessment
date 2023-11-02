/**
 * @imports This is aimed at importing the components to the navbar 
 */
import Navbar from "./Navbar"


export default function Home(){
    return(
        <div
        // Apply Tailwind CSS classes to style the background
        className="bg-cover bg-no-repeat bg-fixed bg-center h-screen"
        // Use inline style to set the background image
        style={{
          // Set the background image URL
          backgroundImage: "url(https://res.cloudinary.com/dyl3rncv3/image/upload/v1679910469/elewa-group-website/hero-Images/pexels-bg-edit_bb4znx.jpg)",
        }}
      >
        <Navbar />
      </div>
        
    )
}