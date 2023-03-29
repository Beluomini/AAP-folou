import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, Pressable, Alert, FlatList } from 'react-native';
import api from "./api";

// https://icons.expo.fyi/
import { MaterialIcons } from '@expo/vector-icons';
import Header from './Header';

export default function HomeScreen({ navigation, route }) {
  const [idClient, setIdClient] = useState(route.params.idClient);
  const [products, setProducts] = useState([]);

  function productNavigate(id) {
    return () => {
      navigation.navigate('Product', { idProduct: id, idClient: idClient, idOrder: route.params.idOrder });
    }
  }

  useEffect(() => {
    api.getProducts().then((res) => {
      setProducts(res);
    })
  }, []);

  return (
    <View style={styles.container}>

      <Header navigation={navigation} route={route} idClient={idClient} />

      <View style={styles.productView}>
      
        <Text style={styles.title}>Produtos</Text>

        <FlatList
          data={products}
          renderItem={({ item }) =>
            <View style={styles.productViewItem}>
              <Text style={styles.productTitle} >{item.name}</Text>
              <Text style={styles.productTitle} >{item.description}</Text>
              <Text style={styles.productTitle} >R${item.price},00</Text>
              <Image style={styles.productImg} source={{ uri: item.image }} />
              <Pressable style={styles.productBtn} onPress={productNavigate(item._id)}>
                <Text style={styles.productTxt}>Comprar</Text>
              </Pressable>
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#766452',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productView: {
    flex: 1.2,
    alignItems: 'center',
    borderRadius: 10,
    width: "100%",
    backgroundColor: '#766452',
    marginBottom: 20,
  },
  productViewItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 30,
    borderWidth: 1,
    width: "100%",
    backgroundColor: '#766452',
  },
  productTitle: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productBtn: {
    backgroundColor: '#766452',
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    width: "90%",
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImg: {
    width: 100,
    height: 100,
  },
  productTxt: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  }
});
