import { useState } from 'react';
import {View, Text, StyleSheet, TextInput, Image, Pressable, Alert } from 'react-native';
import api from "./api";

export default function LoginScreen({navigation, route}) {

  const [email, setEmail] = useState("biskela@gmail.com");
  const [senha, setSenha] = useState("biskela123456");

  async function login() {
    const body = {
      "email": email,
      "password": senha,
    }
    const response = await api.loginClient(body)
    .then((res) => {
      if (res.$isNew == false) {
        console.log(res._doc._id);
        navigation.navigate('Home', {idUser: res._doc._id});
      }else {
        if(res.message == "Unauthorized") {
          Alert.alert('Erro', 'Cliente não encontrado. \nEmail ou senha incoorretos', [
            {text: 'Ok', style: 'cancel',},
          ]);
        }else{
          alert(`Erro: ${res.message}`);
        }
      }
    })
    .catch((err) => {alert(`Erro: ${err.response.data.message}`);});
    }

  return (
    <View style={styles.container}>
      <Image style={styles.stretch} source={require('./assets/aapfolou.png')} />
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} value={email} placeholder="Email" onChangeText={setEmail} />
      <TextInput style={styles.input} value={senha} placeholder="Senha" onChangeText={setSenha} />
      <Pressable style={styles.loginBtn} onPress={ () => {login()} }>
        <Text style={styles.logintxt}>Entrar</Text>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: "60%",
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
  loginBtn: {
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
