import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';



export const Home=()=>{
    return(
        <View style={styles.container}>
            <View>
            <Icon icon={'angle-left'}/>
            </View>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      
    },
  });