import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Styles = StyleSheet.create(
    {content:{  
                flex:1,
                padding:20, 
             },
        headercontent:{
                flex:0.6
             },
        imgBurger:{
                width:350,
                justifyContent:'center',
                resizeMode : 'contain',
               
            },
        baseText:{
                fontWeight: 'bold',
                fontSize:40,
                color:'#BEB7B7',
                marginBottom:150,
                justifyContent:'center',
        },
        bottomContent:{
                flex:0.4,
                justifyContent:"flex-end"
            },
        btnInscription:{
                borderRadius:15,
                backgroundColor:color.orange,    
                padding:10
            },
        btnConnexion:{
                borderRadius:15,
                backgroundColor:"white",
                marginBottom:20,
                padding:10
            },

    }
)
