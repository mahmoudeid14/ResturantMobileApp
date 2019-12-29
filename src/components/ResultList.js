import React from 'react';
import {Text,StyleSheet,View,FlatList,TouchableOpacity} from 'react-native';
import ResultDetail from './ResultDetail';
import {withNavigation} from 'react-navigation';

const ResultList = ({title,results,navigation})=>{

    if(!results.length)
    {
        return null;
    }
    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {/* <Text style={{marginLeft:15}}>Results:{results.length}</Text> */}
        <FlatList 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result=>result.id} 
        renderItem={({item})=>{
            return (
                <TouchableOpacity onPress={()=> navigation.navigate('ResultShow',{id:item.id})}>
                    <ResultDetail result={item}/>
                </TouchableOpacity>
            );
        }}
        />
    </View>;

};

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5
    },
    container:{
        marginBottom:10
    }
});

export default withNavigation( ResultList);