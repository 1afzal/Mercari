import React, { useEffect, useState } from 'react'

function App(){
  const[data,setData]=useState(); //an array since fetched data  will be in array format
  const[loading,setLoading]=useState(true);//toggle loading
  const[error,setError]=useState(false); //toggle error if failure

  useEffect(()=>{
    async function fetchData(){
      try{
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const res_data = await response.json();
      console.log(res_data);
      setData(res_data)
      }
      catch(e){
        console.log(e);
        setError(true);
      }
      finally{
        setLoading(false);
      }

    }
    fetchData()
  },[])

    if(loading) return <h1>loading</h1>
    if(error) return <h1>Error</h1>
    return (
      data && <h1>{data.title}</h1>

   )
}

export default App
