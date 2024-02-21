import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, ImageBackground, View, Image, ScrollView, FlatList } from 'react-native';
import { Cards } from './screens/Cards';
import { Filters } from './screens/Filter';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import { Products } from './screens/Productname';



export const Home=()=>{
const Shoes=[
    {
        image:'https://m.media-amazon.com/images/I/71SfUBZFWNL._AC_SL1000_.jpg',
        name:'Nike',
        price:'$43',
    },

    {
        image:'https://m.media-amazon.com/images/I/71DJ4w69pGL._AC_SY741_.jpg',
        name:'Nike',
        price:'$43',
    },
    {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHe0qZC6aOppcVdKuc2ohWPy6kW0DZPGxMeK14KTrcAdAZoRcvd29xyH0rzBIG0SlwxqY&usqp=CAU',
        name:'Nike',
        price:'$43',
    },
    {
        image:'https://www.jiomart.com/images/product/original/rvxnjvvkpq/tricky-shopper-kids-winter-hat-baby-boy-woolen-cap-baby-girls-winter-hat-thick-scarf-earflap-hood-scarves-skull-caps-2-3-year-pink-product-images-rvxnjvvkpq-3-202309251032.jpg?im=Resize=(1000,1000)',
        name:'Nike',
        price:'$43',
    },

 
   
]


const filt=[
    {
        n:'All',
    },
    {
        n:'women',
    },
    {
        n:'Men',
    },
    {
        n:'Baby',
    },
]

    return(
       <ScrollView>
         <View>
        <View>
            <View style={{flexDirection:'row',display:'flex',marginTop:60, alignItems:'center', justifyContent:'center', justifyContent:'space-around'}}>                
                <Icon name='arrow-left' style={{fontSize:20, color:'#646464' ,backgroundColor:'#ECECEC', width:50,height:50, borderRadius:50, paddingTop:14, paddingLeft:16}}/>
                <Text style={{fontSize:20, fontWeight:'bold'}}>Search</Text>
                <MaterialCommunityIcons name='tune-vertical' style={{fontSize:30,width:50,height:50, borderRadius:50,paddingTop:10, paddingLeft:12}}/>
            </View>

            <View>
                 <TextInput  
      style={{width:300, backgroundColor: '#F4FBFD', gap: 10,  borderRadius:20,  backgroundColor:'#F7F8FD', marginVertical:8, alignItems:'center',justifyContent:'center', marginHorizontal:45}}
        label='Search' 
        mode='flat' underlineColor='white' theme={{roundness: 20}}
        left={<TextInput.Icon  icon="magnify"  color={'#B2B3B7'}  style={{marginHorizontal:20}}/>}
        right={<TextInput.Icon icon="tune-variant" color={'#9B9B9F'}/>}
      />
            </View>

            

              <ScrollView horizontal={true}>
                <View style={styles.filters}>
                    {filt.map((data,index)=>{
                        return(
                            
                            <View key={index} style={{}}>
                                <Filters  n={data.n}/>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        </View>


       <ScrollView horizontal={true}>
         <View  style={styles.container}>
           {Shoes.map((item,index)=>{
            return(
                
                 <View key={index}>
                    <Cards image={item.image} name={item.name} price={item.price}/>
                </View>
                
               
            )
           })}
        </View>
       </ScrollView>
     <Products />
      
       </View>
       </ScrollView>
    );

   
}

const styles =StyleSheet.create({
    container:{
        flexDirection: 'row', 
        justifyContent: 'space-between', // Align children with space between them
        alignItems: 'center', // Align children vertically at the center
        paddingHorizontal: 20, // Add some horizontal padding for space on the sides
        marginBottom: 20, 
        marginTop:30,
        gap:10,
    },
    filters:{
        flexDirection: 'row',
        display:'flex', 
        justifyContent: 'space-between', // Align children with space between them
        alignItems: 'center',
        gap:40, 
        
        marginLeft:200
    },

    produc:{
        flexDirection: 'row',
        display:'flex', 
        flexWrap:'wrap',
        
    },
    producT:{
      
        justifyContent: 'space-between', 
        alignItems: 'center',
        paddingHorizontal: 20, 
         
        marginTop:10,
        
    }
})
