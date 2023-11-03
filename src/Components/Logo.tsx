//This component is a child of Navbar aimed at displaying the logo

import logo from "/src/assets/Logo.png";

/**
 * 
 * @returns the components returns a jsx logo for elewa
 */
export default function Logo(){



    return(
        // Container with font bold, text color black, and a pointer cursor. 
        <div className="font-bold text-black cursor-pointer flex ml-10">
            <img src={logo} className="h-20" alt="" />
        </div>
        
    )
}