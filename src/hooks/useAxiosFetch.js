import {useState,useEffect} from 'react';
import axios from 'axios';

const useAxiosFetch = (dataUrl) => {
    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [fetchError,setFetchError] = useState(null);

    useEffect(()=>{
        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchData=async (url)=>{
            console.log("here");
            try{
                console.log("try block");
                setIsLoading(true);
                const response = await axios.get(url,{
                    cancelToken:source.token
                })
                // if(true){
                    console.log("ismounted ");
                    console.log(response.data);
                    setData(response.data);
                    setFetchError(null);
                // }
            }catch(err){
                if(isMounted){
                    setData([]);
                    setFetchError(err.message);
                }
            }finally{
                // isMounted && setTimeout(()=>setIsLoading(false),2000);
                {isMounted && setIsLoading(false)};
            }
        }
        fetchData(dataUrl);

        const cleanup=()=>{
            console.log("this is axios clean up function");
            isMounted = false;
            source.cancel();
        }
        // return cleanup();
    },[dataUrl]);

  return ({data,fetchError,isLoading});
}

export default useAxiosFetch