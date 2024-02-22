
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, TextInput, Button, Alert} from 'react-native';
import { TextMessage } from './src/componentes';
import logo from './assets/logo.png';
import React from 'react';


export default function App() {
  return (
      <View style={styles.container}>
      <Image style={styles.image} source={logo}/>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        password = {true}
        secureTextEntry
        keyboardType="default"
      />

      <Button
        title="Entrar"
        onPress={() => Alert.alert('Botão pressionado')}
      />
      </View>
  );
};

const styles = StyleSheet.create({
 container: {
    position: "absolute",
    backgroundColor: '#fff',
    width: '70%',
    height: '45%',
    left: "15%",
    top: "32%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,
    elevation: 19,},

      image:{
        position: "relative",
        transform: `scale(0.5)`,
        top: 0,
        marginTop: -20,
        marginBottom: -15,
      },

      input: {
        position: "relative",
        top: 0,
  
        marginBottom: 10,
        borderRadius: 10,
        height: 40,
        width: '80%',
        paddingLeft: 10,
        borderWidth: 1,
      },
    })
