//zona1: importaciones de componentes y archivos
import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import { StyleSheet, Text, View, Button, TextInput, KeyboardAvoidingView, Image, Platform, ActivityIndicator } from 'react-native';
import { use } from 'react';

//Zona2: main - hogar de la aplicación, donde se renderizan los componentes y se define la estructura visual de la app
export default function ActIndicator() {


  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGuardar = () => {
    if(nombre.trim() === '' || carrera.trim() === '') {
      alert('Completa todos los campos');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      alert(`Perfil de ${nombre} guardado con éxito`);
      
      setNombre('');
      setCarrera('');
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.formContainer}
      >
        <View style={styles.formContainerInner}>
          <View style={styles.formBody}>
            <Text style={styles.titulo}>Agregar Perfil</Text>
            
            <TextInput 
              style={styles.input} 
              placeholder="Nombre completo" 
              value={nombre}
              onChangeText={setNombre}
            />

            <TextInput 
              style={styles.input} 
              placeholder="Carrera" 
              value={carrera}
              onChangeText={setCarrera}
            />
          </View>

          <View style={styles.actionArea}>
            {isLoading ? (
              <ActivityIndicator size="small" color="#4D96FF" style={styles.loader} />
            ) : (
              <Button title="Guardar Perfil" onPress={handleGuardar} color="#4D96FF" />
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </View>
  );
}

//Zona3: estilos - define los estilos para los componentes de la aplicación, en este caso, el contenedor principal
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    width: '90%',
    maxWidth: 400,
  },
  formContainerInner: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  formBody: {
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  actionArea: {
    alignItems: 'center',
    marginTop: 10,
  },
  loader: {
    marginVertical: 8,
  },
});
