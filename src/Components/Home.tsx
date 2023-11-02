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
          backgroundImage: "url(https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_2400/v1681285764/elewa-group-website/hero-Images/home-page-bg-min_jfkopo.jpg)",
        }}
      >
        <Navbar />
      </div>
        
    )
}