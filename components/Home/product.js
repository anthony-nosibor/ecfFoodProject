import React from 'react';
import {View, Image, TouchableOpacity, Text, ScrollView} from 'react-native';
import { ListItem, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import {Styles} from './style';

 const LeftContent = props => <Avatar.Icon {...props} icon="food" color='white' backgroundColor='#E78B1F'  />
 const Product = () => {
    
        const navigation = useNavigation();
        
        return (
            <TouchableOpacity onPress={()=> navigation.navigate('Détail')}>
                
                {/* <Card containerStyle={{
                                       margin:0,
                                       justifyContent:'space-between',
                                       width:170}}>
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
                </Card> */}
                                <Card  style={{ 
                                        
                                        width:170,
                                        padding:10,
                                        shadowOpacity:0.9,
                                        marginHorizontal:5,
                                        marginVertical:5,
                                        // backgroundColor:'#E78B1F',
                                        justifyContent:'center',
                                 }}>
                                       
                    <Card.Title title="Burger" left={LeftContent} />
                    {/* <Card.Content>
                    </Card.Content> */}
                    <Card.Cover source={require('../../images/5.png')} style={Styles.imgBurger}/>

                    <Card.Actions>
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
                    </Card.Actions>
                </Card>
            </TouchableOpacity>  
        )
    }

export default Product;