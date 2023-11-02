//This component is a child of Navbar aimed at displaying the logo


/**
 * 
 * @returns the components returns a jsx logo for elewa
 */
export default function Logo(){



    return(
        // Container with font bold, text color black, and a pointer cursor. 
        <div className="font-bold text-black cursor-pointer flex">
            <img src="https://media.istockphoto.com/id/1383510053/photo/twitter-3d-logo-3d-render-image-illustration.webp?b=1&s=612x612&w=0&k=20&c=3MyVv-IyQpK8hzHaCG7xovbP8V3-eWEzEcxHFr7C-U0=" className="h-20" alt="" />
        </div>
        
    )
}