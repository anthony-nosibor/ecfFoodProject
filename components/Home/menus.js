import React from 'react';
import {View, Image, TouchableOpacity, Text, ScrollView} from 'react-native';
import { Button, Card } from 'react-native-elements';
import {Styles} from './style';

export default class Menus extends React.Component{
    render(){
        return (
            <View style={{
                                    
                                    justifyContent:'center',
                                    
                                    height:50,
                                    marginHorizontal:10,
                                    borderRadius:25,
                                    backgroundColor:'#E78B1F',
                                    color:'white'}}>
                 <Text style={Styles.baseText}>
                     Menus
                 </Text>

            </View>  
        )
    }
}
