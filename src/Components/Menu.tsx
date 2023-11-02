/**
 * Separate component for handling the menu state and UI.
 */

/**
 * Imports necessary components to this file.
 */
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

/**
 * Defines the properties expected by the Menu component.
 * @type {Object} MenuProps
 * @property {boolean} menu - A boolean representing the menu state.
 * @property {() => void} handleMenu - A function to handle the menu.
 */
type MenuProps = {
    menu: boolean;
    handleMenu: () => void;
  };

/**
 * Represents a menu component.
 * @param {MenuProps} props - The properties passed to the Menu component.
 * @returns {JSX.Element} A JSX element that displays the menu icon.
 */
const Menu: React.FC<MenuProps> = ({ menu, handleMenu }) => (
  <div
    onClick={handleMenu}
    // A clickable area to handle the menu, positioned absolutely.
    className="text-3xl absolute mt-6 right-8 top-6 cursor-pointer text-white md:hidden"
  >
    {menu ? <FaTimes /> : <FaBars />}
  </div>
);

export default Menu;
