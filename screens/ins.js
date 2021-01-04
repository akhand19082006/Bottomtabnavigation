import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
export default class Ins extends React.Component {
    render(){
        return(
           <View>
              <Image source={require("../assets/ins.jpg")}
              style={{width:200,height:200,marginTop:200,marginLeft:700}}
               />
            
      </View>  )
    }
}