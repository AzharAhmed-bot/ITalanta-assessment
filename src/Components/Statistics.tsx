//This component is used to display the statistics of the before the cards


import { useEffect, useState } from "react";
import { dataService } from "../dataService";



/**
   * Functional component to render a list of cards.
   *
   * @returns it return the JSX of the statistics page
   */
export default function Statistics() {
  const section: string = "statistics";


   /**
 * Represents the data for Statistic
 */
  type Statistic = {
    numbers: string;
    description: string;
  }[];

  const [statistics, setStatistics] = useState<Statistic>([]);

  useEffect(() => {
    dataService(section, setStatistics);
  }, [section]);

  return (
    <div>
        {/* This is tailwind style for displaying the in a row and align perfect */}
      <div className="flex space-x-8  text-center ml-20">
        {statistics.map((stat, index) => (
            //This style is used to give a padding of 20px for larger screen
          <div key={index} className="items-center md:p-20 p-0">
            <div
            //Thiss is used to style the content of the data ie the font and text color
              className="text-white gap-6 font-bold text-6xl" 
              style={{ fontSize: "46px" }} // Additional inline style for font size
            >
              {stat.numbers}
            </div>
            {/* This is used to style the text */}
            <div className="description text-white">{stat.description}</div> {/* Tailwind CSS class for text color */}
          </div>
        ))}
      </div>
    </div>
  );
}
