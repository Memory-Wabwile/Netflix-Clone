import React , {useState , useEffect} from 'react'
import axios from './axios';


function Row({title}) {
  const[movies,setMovies] = useState([]);
    
    // code which runs based on specific conditions

  useEffect(()=>{
    // if [] , run once when the row loads and dont run again
    async function fetchData(){
      const request = await axios.get(fetchUrl);
    }
    fetchData();
  } , []); 
  return (
    <div>
        <h2>{title}</h2>
    </div>
  )
}

export default Row