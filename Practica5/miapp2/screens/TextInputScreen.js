//zona1: importaciones de componentes y archivos
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, Alert, Keyboard, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

//Zona2: main - Cambiado a RegistroForm para evitar conflictos
export default function RegistroForm() {

  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [edad, setEdad] = useState('');
  const [correo, setCorreo] = useState('');

  const procesarRegistro = () => {
    // Cerramos el teclado en dispositivos móviles
    if (Platform.OS !== 'web') Keyboard.dismiss();

    if (!nombre || !password || !edad || !correo) {
      alertasManager("Validación", "Todos los campos son obligatorios");
      return;
    }

    alertasManager("Éxito", `Registro procesado para: ${nombre}`);
  };

  const alertasManager = (titulo, mensaje) => {
    if (Platform.OS === 'web') {
      alert(`${titulo}: ${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <TextInput
        style={styles.input}
        placeholder="Nombre Completo"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <TextInput
        style={styles.input}
        placeholder="Edad"
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
        maxLength={5}
      />

      <TextInput
        style={styles.input}
        placeholder="Correo"
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Button
        title="Registrar Usuario"
        onPress={procesarRegistro}
      />
    </View>
  );
}

//Zona3: estilos
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20, 
    backgroundColor: '#f5f6fa' 
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#dcdde1',
    padding: 12, 
    borderRadius: 8, 
    marginBottom: 12, 
    backgroundColor: '#fff' 
  }
});