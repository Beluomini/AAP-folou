import { useEffect, useState } from 'react';
import {View, Text, StyleSheet, TextInput, Image, Pressable, Alert, FlatList } from 'react-native';
import api from "./api";

// https://icons.expo.fyi/
import { MaterialIcons } from '@expo/vector-icons';
import Header from './Header';

export default function CartScreen({navigation, route}) {

  return (
    <View style={styles.container}>

      <Header navigation={navigation} />
      
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
    marginTop: 20,
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
});
