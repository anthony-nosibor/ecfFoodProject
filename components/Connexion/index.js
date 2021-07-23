import React, {useState, useContext} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button, Input  } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import {FirebaseContext} from '../../FirebaseContext'

import {Styles} from './style';


import color from '../../assets/color';


const index = ({ navigation }) => {

    const {auth} = useContext(FirebaseContext)
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    const connexion = () => {
        try {
            auth.signInWithEmailAndPassword( email, password)
            console.log('connexion', email, password);
            
        } catch (error) {
            console.log(error)
        }

    };

    return (
        
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#4c669f', '#3b5998', '#192f6a']} style={Styles.content}>
                    <Text style={Styles.baseText}>Connectez-vous</Text>

                    <View style={Styles.headercontent}>
                    <Input
                        placeholder='E-MAIL'
                        onChangeText={setEmail}
                        value={email}
                        leftIcon={<Icon
                            name='envelope'
                            size={30}
                            color='#BEB7B7'
                            
                          />}
                        />

                    <Input
                        placeholder='MOT DE PASSE'
                        secureTextEntry={true}
                        onChangeText={setpassword}
                        value={password}
                        leftIcon={
                            <Icon
                            name='key'
                             size={30}
                             color='#BEB7B7'
                           
                          />
                        }
                        />
                    </View>    

           

            <View style={Styles.bottomContent}>

            <Button buttonStyle={Styles.btnConnexion}
                        titleStyle={{color:color.txtcolorTitleFirst,   
                                     fontSize:24,
                                     fontWeight:"bold",}}
                        title="CONNECTEZ-VOUS"
                        onPress={connexion}/>

                <Button buttonStyle={Styles.btnConnexion}
                        titleStyle={{color:color.txtcolorTitleFirst,   
                                     fontSize:24,
                                     fontWeight:"bold",}}
                        title="ACCUEIL"
                        onPress={() => navigation.navigate('Home')}/>

            </View>
        </LinearGradient>
       
    )
}

export default index