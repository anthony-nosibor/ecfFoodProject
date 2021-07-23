import React from 'react';
import {View, Image, TouchableOpacity, Text, ScrollView} from 'react-native';
import {Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

import { Avatar, Card, Title, Paragraph } from 'react-native-paper';

import {Styles} from './style';

const LeftContent = props => <Avatar.Icon {...props} icon="food" color='white' backgroundColor='black'  />

 const index = () => {
    
        const navigation = useNavigation();
        
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
                                        color='black'
                                        />  }
                            onPress={() => {
                                navigation.goBack();
                            }}
                        />

                        <View style={Styles.iconcontent}>
                        <Icon 
                                        name='user'
                                        size={30}
                                        color='black'
                                        onPress={()=> navigation.navigate('Compte')}
                                        />
                        </View>
                        <View style={Styles.iconcontent2}>
                            <Icon 
                                        name='bars'
                                        size={30}
                                        color='black'
                                        />
                        </View>        
                       

                </View>
                <Card   style={{ flex:0.4,
                                 margin:0,
                                 marginTop:50,
                                 backgroundColor:'#E78B1F',
                                 justifyContent:'space-between',
                                 width:'100%'}}>
                                       
                    <Card.Title title="Burger du chef" subtitle="A la sauce manikou" left={LeftContent} />
                    <Card.Content>
                    <Title></Title>
                    </Card.Content>
                    <Card.Cover source={require('../../images/4.png')} style={Styles.imgBurger}/>
                    <Paragraph>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    </Paragraph>
                    <Card.Actions>
                    <View style={Styles.CardAction}>

                        <Text>Price $$</Text>
                        <Button
                                    icon={<Icon name='plus' color='white' />}
                                    buttonStyle={{  borderRadius: 15, 
                                                    marginLeft: 240, 
                                                   
                                                   
                                                    backgroundColor:'#E78B1F', 
                                                    width:30,
                                                    
                                                }}                    
                                />
                    </View>
                    </Card.Actions>
                </Card>
                {/* <Card containerStyle={{
                                       flex:0.4,
                                       margin:0,
                                       marginTop:50,
                                       justifyContent:'space-between',
                                       width:'100%'}}>
                    <Card.Title>Menu name</Card.Title>
                    <Card.Divider/>
                    <Card.Image source={require('../../images/4.png')} style={Styles.imgBurger} 
                         >
                     
                    </Card.Image>

                        <View style={Styles.titleText}>

                            <Text>Price $$</Text>
                            <Button
                                icon={<Icon name='plus' color='white' />}
                                buttonStyle={{  borderRadius: 15, 
                                                marginLeft: 0, 
                                                marginRight: 0, 
                                                marginBottom: 0, 
                                                backgroundColor:'#E78B1F', 
                                                width:30,
                                                marginLeft:50
                                            }}                    
                            />
                        </View>
                </Card>  */}

                <View style={Styles.Text}>

                   

                </View>

                <View style={Styles.bottomContent}>

                    <Button buttonStyle={Styles.btnConnexion}
                            titleStyle={{
                                        fontSize:24,
                                        fontWeight:"bold",}}
                            title="COMMANDER"/>
                </View>

            </View>  
        )
    }

export default index ;