/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useContext, useEffect, useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import auth from '@react-native-firebase/auth';
import { FirebaseContext } from './FirebaseContext' ;

import Welcome from './components/Welcome';
import Connexion from './components/Connexion';
import Inscription from './components/Inscription';
import Home from './components/Home';
import Détail from './components/Détail';
import Compte from './components/Compte';

const Stack = createStackNavigator();

const App = ({navigation}) => {

  const {auth} = useContext(FirebaseContext) ;
    const [user, setUser] = useState(null) ;
    
        useEffect(() => {
          // dispatch(addNavigation())
          const authChange = auth.onAuthStateChanged(userAuth=>{
            setUser(userAuth)
            console.log('userAuth', userAuth)
          })
          return () => {
            authChange
          }
        }, []);

 return (
  <NavigationContainer>

            <Stack.Navigator screenOptions={{ headerShown: false }}>
             
              <Stack.Screen name="Welcome" component={Welcome} /> 
              <Stack.Screen name="Connexion" component={Connexion} />
              <Stack.Screen name="Inscription" component={Inscription} />
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Détail" component={Détail} /> 
              <Stack.Screen name="Compte" component={Compte} />  
             
            </Stack.Navigator>
    
  </NavigationContainer>
  )
};

export default App;
