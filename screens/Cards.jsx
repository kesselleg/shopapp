import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, ImageBackground, View, Image, ScrollView } from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';






export const Cards=({image,name,price})=>{
    return(
        <View style={styles.container}>    
                  
            <View style={styles.image}>
       
       <ImageBackground 
        source={{uri:image}} style={{width:200, height:200,}}>
            <Text style={{fontWeight:'bold'}}>{name}</Text>
            <Text>{price}</Text>
       </ImageBackground>
       
        </View>      
         

        </View>
        
         
    );
}

const styles =StyleSheet.create({
   
   
 
})