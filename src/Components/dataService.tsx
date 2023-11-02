//This component is aimed at fetching data from endpoints to update state


/**
 * Fetch data from a specified endpoint.
 * @param endpoint The endpoint is aimed at providing the path for the url
 * @param setData This updates state once the data is fetched
 * @returns It returns the data once the fetch is successful
 */
async function  fetchData(endpoint:string,setData:(data: any) => void){
    try{
        const response=await fetch(`http://localhost:3000/${endpoint}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setData(data);
          return data;
    }
    catch(error){
        console.log(error)
    }
}




/**
 * @exports
 * This exports the function to be used in other components
 */
export {fetchData};