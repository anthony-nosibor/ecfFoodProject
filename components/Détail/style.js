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
iconcontent:{
        
        flexDirection:'row',
        paddingLeft:210,
        marginHorizontal:15,
        justifyContent:'flex-end',
     },
titlecontent:{
        flex:0.1,
        width:'100%', 
     },


Text:{
    flex:0.3,
    justifyContent:'flex-end',
     },
imgBurger:{
        justifyContent:'center',
        resizeMode : 'contain',
        borderColor:'black' ,
           
    },
card:{
    justifyContent:'space-between',
    width:180,
    marginRight:15
    },

baseText:{
    fontSize: 20,
    fontWeight: "bold",
    color:'white',
    marginLeft:25,
    justifyContent:'center',
},
CardAction:{
    flexDirection:'row',
    justifyContent:'space-between',
},
bottomContent:{
    flex:0.4,
    justifyContent:"flex-end"
},
btnConnexion:{
    borderRadius:15,
    backgroundColor:color.orange,    
    padding:10
},

})