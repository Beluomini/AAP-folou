import {View, Text, StyleSheet, TextInput, Image, Pressable } from 'react-native';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.stretch} source={require('../assets/images/aapfolou.png')} />
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Senha" />
      <Pressable style={styles.loginBtn} onPress={() => console.log('Pressed')}>
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
