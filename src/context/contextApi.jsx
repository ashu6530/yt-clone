import { createContext,useState,useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context=createContext();

export const AppContext=(props) =>
{
  const [loading,setLoading]=useState(false);
  const [searchResults,setSearchResults]=useState([]);
  const [selectCagetories,setSelectCagetories]=useState("New");
  const [mobileMenu,setMobileMenu]=useState(false);


useEffect(()=>{
    fetchSelectedCatgoryData(selectCagetories)
},[selectCagetories])

const fetchSelectedCatgoryData = (query)=>{
    setLoading(true)
    fetchDataFromApi(`search/?q=${query}`).then(({contents})=>{
    setSearchResults(contents)
    setLoading(false)
    })
}


return (
    <Context.Provider value={{
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectCagetories,
        setSelectCagetories,
        mobileMenu,
        setMobileMenu
    }}>
        {props.children}
    </Context.Provider>
)
}