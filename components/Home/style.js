import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
    content:{  flex:1,
        padding:20, 
        backgroundColor:'white'
     },
headercontent:{
        flex:0.1,
        width:'100%',
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'flex-end'
     },
titlecontent:{
        flex:0.1,
        width:'100%', 
     },
title:{
        fontSize:32,
        fontWeight:'bold'
     },
subtitle:{
        color:'#BEB7B7'
     },
scrollhorizontalcontent:{
        flex:0.2,
        width:'100%',
        backgroundColor:'white',
        justifyContent:'center'
     },
cardscontent:{
        flex:0.6,
        width:'100%',
        backgroundColor:'white',
     
     },

imgBurger:{
        width:'100%',
        resizeMode:'contain',
        justifyContent:'space-between',
       
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
     marginHorizontal:25,
    
},
titleText:{
    flexDirection:'row'
},

})