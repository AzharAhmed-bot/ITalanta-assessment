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
    
    //Variable used for state
    const [links,setLinks]=useState<string>("")

    //This function aims at preventing endless requests to the endpoint
    useEffect(()=>{
        fetchData("navbarLinks",setLinks)
    },[])
    
    console.log(links)
   return(
    <>
     Hello World
    </>
   )


}

export default Links;