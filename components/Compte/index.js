import React, {useState, useContext} from 'react';
import {View, Image, TouchableOpacity, Text, ScrollView} from 'react-native';
import {Avatar, Button, Input  } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import {FirebaseContext} from '../../FirebaseContext'

import {Styles} from './style';


 const index = () => {
    
    
        const navigation = useNavigation();
        const {auth} = useContext(FirebaseContext)
        const logout = () => {
            auth.signOut();
        }
        
        return (
            <View style={Styles.content}>

                <View style={Styles.headercontent}>
                        <Button
                            buttonStyle={{  
                                backgroundColor:'white', 
                                width:50,     
                            }}
                            icon={ <Icon 
                                        name='chevron-left'
                                        size={30}
                                        color='black'/>  }
                            onPress={() => {
                                navigation.goBack();
                            }}
                        />


                        <View style={Styles.iconcontent}>
                            <Icon 
                                        name='bars'
                                        size={30}
                                        color='black'/>
                        </View>

                </View>
                <View style={Styles.avatarcontent}>

                    <Avatar
                        size="xlarge"
                        rounded
                        title="MT"
                        source={
                            require('../../images/profil.jpeg')
                            
                        }
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                        
                        />

                    <Text style={Styles.Text}>	Souleymane</Text>
                    <Text  style={Styles.Text}>	Diawara</Text>
                </View>



                <View style={Styles.inputContent}>
                    <Input
                        placeholder='MES COMMANDES'
                        style={Styles.input}
                    />
                </View>


                <View style={Styles.bottomContent}>

                    <Button buttonStyle={Styles.btnConnexion}
                            titleStyle={{
                                        fontSize:24,
                                        fontWeight:"bold",}}
                            title="DECONNEXION"
                            onPress={logout}/>
                </View>

            </View>  
        )
    }

export default index ;