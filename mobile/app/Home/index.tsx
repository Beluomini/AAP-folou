import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {View, Text, StyleSheet, TextInput, Image, Pressable, Modal } from 'react-native';

import api from '../../services/api';
import ModalScreen from './modal';

export default function HomeScreen() {
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  return (
    <View style={styles.container}>
      <Modal
          animationType={'slide'}
          transparent={false}
          visible={showModal}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
        <View style={styles.modal}>
          <Text style={styles.title}>Modal is open!</Text>
          <Pressable onPress={() => { setShowModal(!showModal); }}>
            <Text style={styles.title}>Hide Modal</Text>
          </Pressable>
        </View>
      </Modal>
      <Pressable style={styles.logoutIcon} onPress={ () => {router.push('/Login')}}>
        <MaterialIcons style={styles.logoutIcon} name="logout" size={35} color="black" />
      </Pressable>
      <Pressable style={styles.menuIcon} onPress={ () => {router.push('/Home')}}>
      <MaterialIcons style={styles.menuIcon} name="home" size={35} color="black" />
      </Pressable>
      <Text style={styles.title}>Entrou</Text>
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
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00ff00',
    padding: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoutIcon: {
    position: 'absolute',
    top: "5%",
    right: "5%",
  },
  menuIcon: {
    position: 'absolute',
    top: "5%",
    left: "5%",
  },
});
