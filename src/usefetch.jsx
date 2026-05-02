
import { useState,useEffect } from "react";
const usefetch = (url) => {

  const [data, setData] = useState(null);
  const [dummy,setDummy]=useState(true);
  const [error,setError]=useState(null);

  useEffect(()=>{
    setTimeout(()=>{
    fetch(url)
    .then(response => {
         if(!response.ok){
           throw Error("I did't see data");
         }
         console.log(response);
         return response.json();
        }).then(data => setData(data))
        .catch((error)=>{
            console.log(error.message);
            setError(error.message);
        })},6000)
  }, []);

  return [data,dummy,error];
}


export default usefetch