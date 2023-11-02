//This component is responsible for handling the paragraph sector of the Landing pages


import { useState, useEffect } from "react";
import { dataService } from "./dataService";


/**
 * Data structure for the Section prop.
 */
type ParagraphProps = {
    section: string;
}


/**
 * Data structure for the Paragraph component.
 */
type ParagraphData = {
    header: string;
    paragraph: string;
    text: string;
}

/**
 * Functional component for rendering a Paragraph.
 *
 * @param {ParagraphProps} props - The properties for the paragraph component.
 * @returns {JSX.Element} The paragraph component.
 */
export default function Header({ section }: ParagraphProps): JSX.Element {
    const [paragraphData, setParagraphData] = useState<ParagraphData | null>(null);

    useEffect(() => {
        // Call the dataService with the appropriate endpoint to fetch header data
        dataService(section, setParagraphData);
    }, [section]); // Fetch the data when the section prop changes

    return (
        //This tailwind classes are used to style the text of the paragraph , displaying at the center and changing font
        <div className="text-center">
            {paragraphData && (
                <h1 className="text-white font-bold text-4xl font-[Poppins]  ml-4 font-30px  float-left mb-16">{paragraphData.paragraph}</h1>
            )}
        </div>
    );
}
