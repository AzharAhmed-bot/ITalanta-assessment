//This component solely fetches data provided by the data service


/**
 * @imports aimed at importing neccesary files only
 */
import { dataService } from "./dataService";
import { useEffect } from "react";


/**
 * 
 * @param endpoint the endpoint is aimed at providing the path for the url
 * @param setData  This updates state once the data is fetched
 */
export function DataFetcher(endpoint:string, setData: React.Dispatch<React.SetStateAction<any[]>>) {
  useEffect(() => {
    dataService(endpoint, setData);
  }, [endpoint, setData]);
}
