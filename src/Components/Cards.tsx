//This component is used to display the card items


import React, { useEffect, useState } from "react";
import Statistics from "./Statistics";
import { dataService } from "./dataService";
import CardItem from "./CardItem"; // Import the CardItem component



/**
   * Functional component to render a list of cards.
   *
   * @param {Object} props - The component's props.
   * @param {cardData} props.data - An array of card data to render.
   */
export default function Card() {
  /**
 * Represents the data for each card.
 */
  type cardData = {
    id:number;
    paragraph: string;
    header: string;
    url: string;
  }[];

  const section: string = "cards";
  const [data, setData] = useState<cardData>([]);

  useEffect(() => {
    dataService(section, setData);
  }, [section]);

  return (
    <div className="flex flex-wrap bg-black">
      <Statistics/>
      <CardItem data={data}/>
    </div>
  );
}
