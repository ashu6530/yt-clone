import axios from "axios";
const BASE_URL="https://youtube138.p.rapidapi.com";



const options = {
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': "1d57297a3bmsh52c0f2f2e11753bp1509f5jsn4ef5b37847f1",
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };
  
 export const fetchDataFromApi = async (url) =>{
  try{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
      return data;
  } 
  catch(error) {
    
    console.error(`Error:${error}`)}
      
  }