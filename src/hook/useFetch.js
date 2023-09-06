import { useState } from "react";

const useFetch = () => {
 const [loading, setLoading] = useState(false);
 const [data, setData] = useState(null);
 const [error, setError] = useState(null);

 const fetchData = async (url, options = {}) => {
  try {
   setLoading(true);
   setError(null);
   const response = await fetch(url, options);
   if (!response.ok) {
    setError(`HTTP error! status: ${response.status}`);
    return null;
   }
   const jsonData = await response.json();
   setData(jsonData);
   return jsonData;
  } catch (err) {
   setError('Error fetching data: ' + err);
   return null;
  } finally {
   setLoading(false);
  }
 };

 return {
  loading,
  data,
  error,
  fetchData,
 };
};

export default useFetch;


