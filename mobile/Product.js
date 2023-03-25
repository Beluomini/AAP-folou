import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Image, Pressable, Alert } from 'react-native';
import Header from './Header';

import { MaterialIcons } from '@expo/vector-icons';
import api from "./api";

export default function ProductScreen({ navigation, route }) {

  const productId = route.params.idProduct;
  const [product, setProduct] = useState([]);

  const [quantidade, setQuantidade] = useState(1);

  function comprarProduto() {
    console.log("id do produto: " + route.params.idProduct);
    console.log("id do cliente: " + route.params.idClient);
    console.log("id do petshop: " + product.fk_id_pet_shop);
    console.log("quantidade: " + quantidade);
    console.log("valor: " + product.price);

  }

  useEffect(() => {
    api.getProductById(productId).then((res) => {
      setProduct(res);
    })
  }, []);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.produtct}>
        <Text style={styles.title}>Produto Selecionado</Text>
        <Text style={styles.productTitle} >{product.name}</Text>
        <Text style={styles.productTitle} >{product.description}</Text>
        <Text style={styles.productTitle} >R${product.price},00</Text>
        <Image style={styles.productImg} source={{ uri: product.image }} />
        <TextInput
          style={styles.qtdInput}
          onChangeText={setQuantidade}
          value={quantidade}
          placeholder="quantidade"
          keyboardType="numeric"
        />
        <Pressable style={styles.productBtn} onPress={() => { comprarProduto() }} >
          <Text style={styles.productTxt}>Comprar</Text>
        </Pressable>
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
  produtct: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 10,
    width: "100%",
    backgroundColor: '#766452',
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  productTitle: {
    fontSize: 25,
    padding: 20,
  },
  qtdInput: {
    height: 45,
    width: "40%",
    textAlign: 'center',
    textDecorationColor: '#000',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
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
  productTxt: {
    fontSize: 15,
  },
});
