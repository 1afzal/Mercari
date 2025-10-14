import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"

function App(){
  const[data,setData]=useState([]);
  const[loading,setLoading]=useState(true);
  const[error,setError]=useState(false);

  useEffect(()=>{
    async function getData(){
      try{
       const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
       console.log(response.data)
       setData(response.data);
      }
      catch(err){
        console.log(err);
        setError(true);
      }
      finally{
        setLoading(false);
      }
    }
    getData();
  },[])
  if(loading) return <h1>Loadiung....</h1>
  if(error) return <h1>Errorrr....</h1>
  return(
    data && <div>{data.map((todo)=><ul>
      <li key={todo.id}>{todo.title}</li>
    </ul>)}</div>
  )

}
export default App;