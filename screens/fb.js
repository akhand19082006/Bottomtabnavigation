import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
export default class Fb extends React.Component {
render(){
    return(
       
             <Image source={require("../assets/fb.png")}
          style={{width:200,
          height:200,marginTop:200,marginLeft:700}} />
    
    )
}

}
