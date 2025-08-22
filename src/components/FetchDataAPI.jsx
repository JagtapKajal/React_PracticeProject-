import React, { useEffect, useState } from "react";

const FetchDataAPI = () => {

   const [apiData, setApiData]  = useState([]);
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const api = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await api.json();
        setApiData(data);
      console.log("my data", data);
    };
    fetchDataFromAPI();
  }, []);
  return (
    <div>
        {apiData.map((data) => (<div key = {data.id}> 
            <h2>{data.title}</h2>
        </div>))}
      <h1>API Calling</h1>
    </div>
  );
};

export default FetchDataAPI;
