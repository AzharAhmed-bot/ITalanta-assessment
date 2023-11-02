/**
 * Separate component for rendering the list of links.
 */

/**
 * Imports necessary components to this file.
 */
import React from "react";
import { NavLink } from "react-router-dom";

/**
 * Defines the properties expected by the LinkList component.
 * @type {Object} LinkListProps
 * @property {Array<{ label: string, url: string }>} links - An array of objects representing links with labels and URLs.
 * @property {boolean} menu - A boolean representing the menu state.
 * @property {() => void} handleMenu - A function to handle the menu.
 */
type LinkListProps = {
  links: { label: string; url: string }[];
  menu: boolean;
  handleMenu: () => void;
};

/**
 * Represents a list of links component.
 * @param {LinkListProps} props - The properties passed to the LinkList component.
 * @returns {JSX.Element} A JSX element that displays the list of links.
 */
const LinkList: React.FC<LinkListProps> = ({ links, menu, handleMenu }) => (
  <ul
    className={`md:flex md:items-center md:pb-0 pb-12 md:static w-full md:w-auto md:pl-0 pl-9 transition-all ease-in-out duration-500 ${
      menu
        ? "left-50 opacity-100 text-center bg-black text-white"
        : "left-[-490px] md:opacity-100 opacity-0"
    } `}
  >
    {links &&
      links.map((link) => (
        <li
          key={link.label}
          onClick={handleMenu}
          // Apply Tailwind CSS classes for styling the list container
          className={`md:flex md:items-center md:pb-0 pb-8 md:static w-full md:w-auto md:pl-0 pl-9 transition-all ease-in-out duration-500 ${
            menu
              ? "left-50 opacity-100 border-b-2 border-white pb-7"
              : "left-[-490px] md:opacity-100 opacity-0"
          }`}
        >
            {/*Apply Tailwind CSS classes for styling each list item*/}
          <NavLink to={link.url} className="mr-4 hover:underline">
            {link.label}
          </NavLink>
        </li>
      ))}
  </ul>
);

export default LinkList;
