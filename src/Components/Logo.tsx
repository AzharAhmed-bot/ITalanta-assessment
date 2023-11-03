//This component is a child of Navbar aimed at displaying the logo

import logo from "/home/azhar/Italanta-assessment/src/assets/Logo.png";

/**
 * 
 * @returns the components returns a jsx logo for elewa
 */
export default function Logo(){



    return(
        // Container with font bold, text color black, and a pointer cursor. 
        <div className="font-bold text-black cursor-pointer flex">
            <img src={logo} className="h-20" alt="" />
        </div>
        
    )
}