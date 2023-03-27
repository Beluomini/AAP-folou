import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, Pressable, Alert, FlatList } from 'react-native';
import api from "./api";

// https://icons.expo.fyi/
import { MaterialIcons } from '@expo/vector-icons';
import Header from './Header';

export default function MyOrdersScreen({ navigation, route }) {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      api.getOrdersByClient(route.params.idClient).then((res) => {
        res.forEach(item => {
          api.getProductById(item.fk_id_product).then((resp) => {
            item["productName"] = resp.name;
          })
          api.getPetShopById(item.fk_id_pet_shop).then((resp) => {
            item["petShopName"] = resp.name;
          })
        });
        setOrders(res);
      })
    }

    fetchData().catch((err) => {
      console.log(err);
    })
  }, []);

  return (
    <View style={styles.container}>

      <Header navigation={navigation} />

      <View style={styles.productView}>
      
        <Text style={styles.title}>Compras</Text>

        <FlatList
          data={orders}
          renderItem={({ item }) =>
            <View style={styles.productViewItem}>
              <Text style={styles.productTitle} >{item.create_date}</Text>
              <Text style={styles.productTitle} >Pet Shop: {item.petShopName}</Text>
              <Text style={styles.productTitle} >Produto: {item.productName}</Text>
              <Text style={styles.productTitle} >R${item.price},00</Text>
              <Text style={styles.productTitle} >Quantidade: {item.quantity}</Text>
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
