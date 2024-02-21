import React from 'react';
import { View, FlatList, StyleSheet, Image, Text, ImageBackground } from 'react-native';

const ProductItem = ({ images, product, price }) => (
  <View style={styles.itemContainer}>
    <ImageBackground source={{ uri: images }} style={{width:160,height:240, marginHorizontal:8,marginLeft:20,marginTop:14}} >
    <Text style={styles.productName}>{product}</Text>
    <Text style={styles.price}>{price}</Text>
   </ImageBackground>
  </View>
);

export const Products = () => {
  const prod = [
    {
      images: 'https://images.asos-media.com/products/river-island-ribbed-beanie-in-blue/204012293-2?$n_640w$&wid=513&fit=constrain',
      product: 'Nike',
      price: '$43',
    },
    {
      images: 'https://i.pinimg.com/736x/14/d1/eb/14d1eb5b42873f5a41002733e0bb39d5.jpg',
      product: 'Nike',
      price: '$43',
    },
    {
      images: 'https://static-01.daraz.com.bd/p/86e25cd24ccdccf5a5bbfb5108c47257.jpg_750x400.jpg_.webp',
      product: 'Nike',
      price: '$43',
    },

    {
        images: 'https://i.ebayimg.com/images/g/GIwAAOSw4YNjmZDl/s-l1200.jpg',
        product: 'Nike',
        price: '$43',
      },
  ];

  const renderItem = ({ item }) => <ProductItem {...item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={prod}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
 itemContainer:{
   
    gap:20,
 }
});
