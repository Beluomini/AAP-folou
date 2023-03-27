import { useState, useEffect } from 'react';
import {View, Text, StyleSheet, TextInput, Image, Pressable, Alert } from 'react-native';
import Header from './Header';

import { MaterialIcons } from '@expo/vector-icons';
import api from "./api";

export default function ProductScreen({navigation, route}) {

  const productId = route.params.idProduct;
  const [product, setProduct] = useState([]);
  const [orderQtd, setOrderQtd] = useState(0);
  const [quantidade, setQuantidade] = useState(1);

  function comprarProduto() {
    const newOrder = api.createOrder({
      fk_id_client: route.params.idClient,
      fk_id_pet_shop: product.fk_id_pet_shop,
      create_date: "",
	    payment_date: "",
      price: 0,
      payment_method: "PIX",
      fk_cupom: "",
      status: "SENT"
    }).then((res) => {
      console.log(res);

      const newPurchase = api.createPurchase({

        fk_id_order: res._id,
        fk_id_product: route.params.idProduct,
        fk_id_client: route.params.idClient,
        fk_id_pet_shop: product.fk_id_pet_shop,
        quantity: quantidade,
        unit_price: product.price,
        description: product.description
      }).then((res) => {
        console.log(res);

        
        const orderdata = api.getProductOrder(res.fk_id_order).then((res) => {
          console.log(res.length);
          setOrderQtd(res.length);
          navigation.navigate('Home', {idClient: route.params.idClient, idOrder: res.fk_id_order, qtdOrder: orderQtd});
        })

        
      })

    })

  }

  useEffect(() => {
    api.getProductById(productId).then((res) => {
      setProduct(res);
    })
  }, []);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Text style={styles.productTitle} >{product.name}</Text>
      <Text style={styles.productTitle} >{product.description}</Text>
      <Text style={styles.productTitle} >R${product.price},00</Text>
      <Image style={styles.productImg} source={{uri: product.image}} />
      <TextInput
        style={styles.qtdInput}
        onChangeText={setQuantidade}
        value={quantidade}
        placeholder="quantidade"
        keyboardType="numeric"
      />
      <Pressable style={styles.productBtn} onPress={() => {comprarProduto()}} >
        <Text style={styles.productTxt}>Comprar</Text>
      </Pressable>
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
  homeBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 30,
    width: "10%",
    textAlign: 'center',
    textDecorationColor: '#000',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '60%',
  },
  stretch: {
    height: "30%",
    resizeMode: 'contain',
  },
  productBtn: {
    width: "40%",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#A78D73',
  },
  logintxt: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
