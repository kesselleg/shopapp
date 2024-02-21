import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, ImageBackground, View, Image, ScrollView } from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';






export const Filters=({n, icon})=>{
    return(
        <View >  
       <Icon name={icon} size={20} color="black"/> 
            <Text    style={styles.container}>{n}</Text>
        </View>      
    
        
         
    );
}

const styles =StyleSheet.create({
   
    container: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginBottom:10,
        paddingBottom:10,
        paddingTop:4,
        paddingLeft:10,
        backgroundColor:'#FCFDFD', 
        width:64,
         height:30,
         Color:'black',
         

      },
 
})