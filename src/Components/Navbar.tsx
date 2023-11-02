/**
 * Component for the website's navigation bar.
 */

/**
 * Imports necessary components to this file.
 */
import Links from "./Links";
import Logo from "./Logo";

/**
 * Represents the Navbar component.
 * @returns {JSX.Element} A JSX element that displays the website's navigation bar.
 */
const Navbar = (): JSX.Element => {  

  return (
    <div className="shadow w-full fixed top-0 left-0 z-10">
      {/* Container with a shadow, fixed at the top-left corner with a z-index of 10. */}
      <div className="md:flex items-center justify-between py-4">
        {/* Flex container with items centered and space justified between them, with padding. */}
        <Logo />
        {/* The Logo component. */}
        <Links />
        {/* The Links component. */}
      </div>
    </div>
  );
};

export default Navbar;
