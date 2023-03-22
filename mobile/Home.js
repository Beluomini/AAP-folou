import { useEffect, useState } from 'react';
import {View, Text, StyleSheet, TextInput, Image, Pressable, Alert, FlatList } from 'react-native';
import api from "./api";

export default function HomeScreen({navigation, route}) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.getProducts().then((res) => {
      setProducts(res);
    })
    console.log(products);
  }, []);

  return (
    <View style={styles.container}>
      
      <View style={styles.productView}>
        <Text style={styles.title}>Produtos</Text>
        <FlatList
          data={products}
          renderItem={({item}) =>  
            <View style={styles.productViewItem}>
              <Text style={styles.productTitle} >{item.name}</Text> 
              <Text style={styles.productTitle} >R${item.price},00</Text>

            </View>
            }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#766452',
  },
  productView: {
    flex: 1,
    borderRadius: 10,
    marginTop: 60,
    width: "90%",
    backgroundColor: '#766452',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productViewItem: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    width: "100%",
    backgroundColor: '#766452',
  },
  productTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
