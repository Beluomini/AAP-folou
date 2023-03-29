import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, Pressable, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, route, idClient }) {

  return (
    <View style={styles.container}>

      <Image style={styles.stretch} source={require('./assets/aapfolou.png')} />

      <Pressable style={styles.homeBtn} onPress={() => { navigation.navigate('Home', { idClient: idClient }) }}>
        <MaterialIcons name="home" size={24} color="black" />
      </Pressable>
      
      <Pressable style={styles.homeBtn} onPress={() => { navigation.navigate('MyOrders', { idClient: idClient }) }}>
          <MaterialIcons name="shopping-cart" size={24} color="black" />
        </Pressable>
      
      <Pressable style={styles.homeBtn} onPress={() => { navigation.navigate('Perfil', { idClient: idClient }) }}>
          <MaterialIcons name="person" size={24} color="black" />
        </Pressable>

      <Pressable style={styles.homeBtn} onPress={() => { navigation.navigate('Login', { idClient: null }) }}>
        <MaterialIcons name="logout" size={24} color="black" />
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: "100%",
    marginTop: 20,
    justifyContent: 'space-between',

    backgroundColor: '#766452',
  },
  stretch: {
    height: 40,
    resizeMode: 'contain',
  },
  homeBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
  },
  logoutBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
  },
});
