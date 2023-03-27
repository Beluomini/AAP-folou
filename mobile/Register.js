import { useState } from 'react';
import {View, Text, StyleSheet, TextInput, Image, Pressable, Alert } from 'react-native';
import api from "./api";
import { TextInputMask } from 'react-native-masked-text'
import MaskInput, { Masks } from 'react-native-mask-input';

export default function RegisterScreen({navigation, route}) {


  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [contato, setContato] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");

  async function registrar() {
    const body = {
      "email": email,
      "password": senha,
      "name": nome,
      "cpf": cpf,
      "contact": contato,
      "cep": cep,
      "address": endereco,
    }

    console.log(body);

    const response = await api.createClient(body)
    .then((res) => {
      console.log(res);
      if(res.message) {
        alert(`Erro: ${res.message}`);
      }else {
        navigation.navigate('Home', {idClient: res._id});
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <TextInput style={styles.input} value={email} placeholder="Email" onChangeText={setEmail} />
      <TextInput style={styles.input} value={senha} placeholder="Senha" onChangeText={setSenha} />
      <TextInput style={styles.input} value={nome} placeholder="Nome" onChangeText={setNome} />
      <TextInputMask style={styles.input} type={'cpf'} value={cpf} placeholder="CPF" onChangeText={setCpf} />
      <TextInputMask style={styles.input} type={'cel-phone'} value={contato} placeholder="Celular" onChangeText={setContato}
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99) '
        }}
      />
      <MaskInput style={styles.input} keyboardType="numeric" mask={Masks.ZIP_CODE} value={cep} placeholder="CEP" onChangeText={setCep} />
      <TextInput style={styles.input} value={endereco} placeholder="Endereço" onChangeText={setEndereco} />
      <Pressable style={styles.loginBtn} onPress={ () => {registrar()} }>
        <Text style={styles.logintxt}>Registrar</Text>
      </Pressable>
      <Pressable style={styles.title} onPress={ () => {navigation.navigate('Login')} }>
        <Text style={styles.backLoginText}>Ja tenho conta</Text>
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
    margin: 10,
  },
  logintxt: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  backLoginText: {
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
