import {useState,useEffect} from 'react';
import yelp from '../api/yelp';

export default ()=>{
    const [results,setReasult]= useState([]);
    const [errorMessage,setErrorMessage]=  useState('');

    const searchAPI = async (SearchKeyword)=> {
        try{
        const response  = await yelp.get('/search',{
            params:{
                limit:50,
                term:SearchKeyword,
                location:'NY'
            }
        });
        setReasult(response.data.businesses);
    }catch(e)
    {
        setErrorMessage('Something went wrong');
    }
    };

useEffect(()=>{
    searchAPI('pizza');
},[]);
return [results,searchAPI,errorMessage];
}