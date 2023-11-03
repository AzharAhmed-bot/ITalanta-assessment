type cardData = {
    id: number;
    paragraph: string;
    header: string;
    url: string;
  }[];
  
  function CardItem({ data }: { data: cardData }) {
    return (
      <div className="w-full p-4 ">
        {data && data.map((datum, index) => (
          <div style={{ fontSize: '30px' }} className={`w-full mb-4 flex items-center justify-between  ${index === 0 || index === data.length - 1 ?  'flex-row-reverse bg-black text-white text-3xl p-10' :  'flex-row bg-white text-3xl'}`}>
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
  