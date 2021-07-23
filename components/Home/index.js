import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Styles} from './style';
import Product from './product';
import Menus from './menus';

const products = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Burritos',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Black burger',  
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Cheese ',  
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Pizzas ',
    },
  ];

  const menus = [
        {
        id: 'bd7acbea-c1b1-46c2-aed5',
        title: 'Burritos',
        },
        {
        id: '3ac68afc-c605-48d3-a4f8',
        title: 'Black burger',  
        },
        {
        id: '58694a0f-3da1-471f-bd96',
        title: 'Cheese ',  
        },
        {
        id: '58694a0f-3da1-471f-bd96',
        title: 'Pizzas ',
        },
  ];
    
    const index = ({navigation}) => {

        const renderProduct = (item) => {
            return(
                <Product
                    image={item.image}
                    title={item.name}
                                
                />
            )
        };

        const renderMenu = (Item) => {
            return(
                <Menus
                    image={Item.image}
                    title={Item.name}
                    onPress={()=> console.log('hi')}               
                />
            )
        }

    return (
        <View style={Styles.content}>

                <View style={Styles.headercontent}>
                    <Icon 
                            name='bars'
                            size={30}
                            color='black'/>

                </View>

                <View style={Styles.titlecontent}>
                    <Text style={Styles.title}>Hello name</Text>
                    <Text>Que manges-tu aujourd'hui ?</Text>
                </View>

                <View style={Styles.scrollhorizontalcontent}>

                    <FlatList
                            horizontal = {true}
                            data = {menus}
                            renderItem = {renderMenu}
                            keyExtractor = {Item => Item.id}
                        /> 

                </View>

                <View style={Styles.cardscontent}>

                    <FlatList
                        data = {products}
                        numColumns = {2}
                        renderItem = {renderProduct}
                        keyExtractor = {item => item.id} 
                      
                    /> 

                </View>

        </View>
    )
}

export default index
