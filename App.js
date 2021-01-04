import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View ,Image } from 'react-native';
import Fb from './screens/fb';
import Ins from './screens/ins';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
export default function App () {
  return (
   <AppContainer />
  );

}
const TabNavigator =createBottomTabNavigator({
  Instagram:{screen:Ins},
  facebook :{screen:Fb}
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:()=>{
      const routeName= navigation.state.routeName
      if(routeName==="Instagram"){
        return(
          <Image source={require("./assets/ins.jpg")}
          style={{width:40,
          height:40}}
          />
        )
      }
      else if(routeName==="facebook"){
        return(
          <Image source={require("./assets/fb.png")}
          style={{width:40,
          height:40}}
          />
        )
      }
    }
  })
}
)

const AppContainer=createAppContainer(TabNavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
