//This component is responsible for handling the header sector of the Landing pages

import { useState, useEffect } from "react";
import { dataService } from "./dataService";



/**
 * Properties for the Header component.
 */
type HeaderProps = {
    section: string;
}



/**
 * Data structure for the Header component.
 */
type HeaderData = {
    header: string;
    paragraph: string;
    text: string;
}


/**
 * Functional component for rendering a header.
 *
 * @param {HeaderProps} props - The properties for the header component.
 * @returns {JSX.Element} The header component.
 */
export default function Header({ section }: HeaderProps) {
    const [headerData, setHeaderData] = useState<HeaderData | null>(null);

    useEffect(() => {
        // Call the dataService with the appropriate endpoint to fetch header data
        dataService(section, setHeaderData);
    }, [section]); // Fetch the data when the section prop changes
  
    return (
        <div className="text-center">
            {headerData && (
                <h1 className="text-white font-bold ml-12  float-left mb-10">{headerData.header}</h1>
            )}
        </div>
    );
}
