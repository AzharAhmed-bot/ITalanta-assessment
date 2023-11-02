//This component for the

/**
 * Imports necessary components to this file.
 */
import { useState, useEffect } from "react";
import { fetchData } from "./dataService";
import LinkList from "./LinkList";
import Menu from "./Menu";

const Links = () => {
    type Link = {
      label: string;
      url: string;
    };
  
    const [links, setLinks] = useState<Link[]>([]);
    const [menu, setMenu] = useState<boolean>(false);
  
    useEffect(() => {
      fetchData("navbarLinks", setLinks);
  
      // Add a window resize event listener
      window.addEventListener("resize", handleResize);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    // Function to handle the window resize event
    function handleResize() {
      // Check the screen width and set the menu state accordingly
      if (window.innerWidth >= 768) {
        setMenu(false);
      }
    }
  
    function handleMenu() {
      setMenu(!menu);
    }
  
    return (
      <>
        <Menu menu={menu} handleMenu={handleMenu} />
        <LinkList links={links} menu={menu} handleMenu={handleMenu} />
      </>
    );
  };
  
  export default Links;
