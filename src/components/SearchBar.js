import React from 'react';
import {Text,View,Button,StyleSheet,TextInput} from 'react-native';
import  {Feather} from '@expo/vector-icons';

const SearchBar = ({keyword,onSearchChange,onSearchEnded})=>{
 return <View style={styles.background}>
     <Feather name="search" style={styles.iconStyle}></Feather>
        <TextInput 
        placeholder="Search"
        style={styles.inputStyle}
        onChangeText={(newValue)=> onSearchChange(newValue)}
        onEndEditing={onSearchEnded}
        autoCapitalize="none"
        autoCorrect={false}
        />
 </View>;
    
}

const styles = StyleSheet.create({
    background :{
        backgroundColor:'#F0EEEE',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row',
        marginTop:10,
        marginBottom:10
    },
    inputStyle :{
        flex:1,
        fontSize:18
    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:5
    }
});
export default SearchBar;