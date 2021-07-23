import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-elements';
import {Styles} from './style';
import color from '../../assets/color';


const index = ({ navigation }) => {
    return (
        
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#4c669f', '#3b5998', '#192f6a']} style={Styles.content}>


                    <View style={Styles.headercontent}>
                        <Image  source={ require('../../images/4.png')}
                                          style={Styles.imgBurger}>

                        </Image>
                    </View>    

           

            <View style={Styles.bottomContent}>
                <Text style={Styles.baseText}>BURGER THING</Text>

                <Button buttonStyle={Styles.btnConnexion}
                        titleStyle={{color:color.txtcolorTitleFirst,   
                                     fontSize:24,
                                     fontWeight:"bold",}}
                        title="CONNEXION"
                        onPress={() => navigation.navigate('Connexion')}/>

                <Button buttonStyle={Styles.btnInscription}
                        titleStyle={{
                                     fontSize:24,
                                     fontWeight:"bold",}}
                        title="INSCRIPTION"
                        onPress={() => navigation.navigate('Inscription')}/>
            </View>
        </LinearGradient>
       
    )
}

export default index

