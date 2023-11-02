//This is a child component for navbar for the links.


/**
 * @imports
 * This the import sections that imports all the necessary data
 */
import { useState,useEffect } from "react";
import { fetchData } from "./dataService";
import { NavLink } from "react-router-dom";



/**
 * @component
 * This Link component is aimed at displaying the links in the navbar
 */
const Links=()=>{
    // Define a type for the link object
    type Link = {
        label: string;
        url: string;
    };
    //Variable used for state
    const [links,setLinks]=useState<Link[]>([])

    //This function aims at preventing endless requests to the endpoint
    useEffect(()=>{
        fetchData("navbarLinks",setLinks)
    },[])
    
    
   return(
    <>
     {links && links.map((link) => (
        <NavLink key={link.label} to={link.url} className="">
            {link.label}
        </NavLink>
))}
    </>
   )


}

export default Links;