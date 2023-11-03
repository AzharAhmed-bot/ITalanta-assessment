//This component is used to display the items in the card




/**
 * Represents the data for each card.
 */
type cardData = {
    id: number;
    paragraph: string;
    header: string;
    url: string;
  }[];
  
  /**
   * Functional component to render a list of cards.
   *
   * @param {Object} props - The component's props.
   * @param {cardData} props.data - An array of card data to render.
   */
  function CardItem({ data }: { data: cardData }) {
    return (
        //This tailwind style is used to occupy the full width
      <div className="w-full p-4">
        {data && data.map((datum, index) => (
            //This logic style used to bg color and style the image to the left or right based on id and 
          <div key={index}  style={{ fontSize: '30px' }} className={`w-full mb-4 flex items-center justify-between  ${index === 0 || index === data.length - 1 ? 'flex-row-reverse bg-black text-white text-3xl p-10' : 'flex-row bg-white text-3xl'}`}>
            {/* This styleused to  */}
            <div className="w-1/3">
              <div className="rounded-lg p-4"> 
                <img src={datum.url} alt="Card image" className="w-full rounded-lg" />
              </div>
            </div>
            <div className="w-2/3 pl-4">
              <h2 className="text-4xl font-bold mb-2">{datum.header}</h2>
              <p style={{ fontSize: '30px' }} className="text-lg ">{datum.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default CardItem;
  