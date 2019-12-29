import React,{useState} from 'react';
import {Text,View,StyleSheet,ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = ()=>{
    const [keyword,setkeyword]=useState('');
    const[results,searchAPI,errorMessage] = useResults();
    const filterResultByPrice = (price)=>{
        return results.filter(result=>{
            return result.price == price
        });

    };
 

 return <>
{/*   <View style={{flex:1}}> */}
     <SearchBar 
     keyword={keyword} 
     onSearchChange={(newKeyword)=> setkeyword(newKeyword)}
     onSearchEnded={()=>searchAPI(keyword)}/>
     {errorMessage?<Text>{errorMessage}</Text>:null}
        {/* <Text>We Have Found {results.length} results</Text> */}
        <ScrollView>
            <ResultList  results={filterResultByPrice('$')}  title="Cost Effective"/>
            <ResultList  results={filterResultByPrice('$$')} title="Bit Pricer"/>
            <ResultList  results={filterResultByPrice('$$')} title="Big Spender"/>
        </ScrollView>
 {/* </View>; */}
 </>;
    
}

const styles = StyleSheet.create({});
export default SearchScreen;