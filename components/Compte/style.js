import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
    content:{  flex:1,
        padding:20, 
        backgroundColor:'white',
       
     },
headercontent:{
        flex:0.1,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between'
     },
avatarcontent:{
        marginTop:50,
        flex:0.2,
        alignItems:'center',
        justifyContent:'center',
        
},
inputContent:{
        flex:0.2,
        marginTop:40,
        justifyContent:'center',
        fontWeight:'bold',
        color:'#E78B1F'
},

Text:{  
    fontSize: 20,
    fontWeight: "bold",
    justifyContent:'flex-end',
     },

baseText:{
    fontSize: 20,
    fontWeight: "bold",
    color:'white',
    marginLeft:25,
    justifyContent:'center',
},
titleText:{
    flexDirection:'row',
    justifyContent:'space-between',
},
bottomContent:{
    flex:0.5,
    justifyContent:"flex-end"
},
btnConnexion:{
    borderRadius:15,
    backgroundColor:color.orange,    
    padding:10
},

})