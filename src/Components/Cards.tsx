import React, { useEffect, useState } from "react";
import { dataService } from "./dataService";
import CardItem from "./CardItem"; // Import the CardItem component

export default function Card() {
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
      <CardItem
      
      data={data}/>
    </div>
  );
}
