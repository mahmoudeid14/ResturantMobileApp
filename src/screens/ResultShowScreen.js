import React ,{useState,useEffect}from 'react';
import {View,Text,StyleSheet,FlatList,Image} from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen = ({navigation})=> {
    const [result,setResult] = useState(null);
    const id = navigation.getParam('id');
   
    const getResult = async(id)=>{
        const response = await yelp.get(`/${id}`);
        setResult(response.data);

    };
    useEffect(()=>{
        getResult(id);
    },[]);
    if(!result)
    {
        return null;
    }
    return <View style={{marginLeft:10}}>
        <Text style={styles.title}>{result.name}</Text>
        <FlatList
        data={result.photos}
        keyExtractor={(photo)=> photo}
        renderItem={({item})=>{
            return <Image source={{uri:item}} style={styles.image}/>
        }}
        />
    </View>;
}

const styles = StyleSheet.create({
    image :{
        width:300,
        height:200,
        borderRadius:4,
        marginBottom:10
    },
   title:{
       fontSize:16,
       fontWeight:'bold',
       marginBottom:5
   } 
});

export default ResultShowScreen;