import React, { useState } from 'react';
import { Platform, Alert, Keyboard, TextInput, Text, View, StyleSheet, Button, Switch } from 'react-native';
import { StatusBar } from 'expo-status-bar'; 

export default function RegistroScreen() {
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');

  const [asistiraTaller, setAsistiraTaller] = useState(true);
  const [requiereConstancia, setRequiereConstancia] = useState(false);
  const [participaraDeportes, setParticiparaDeportes] = useState(true);

  const registroCaptura = () => {
    if (Platform.OS !== 'web') Keyboard.dismiss();

    if (!nombre || !carrera || !semestre) {
      alertasManager("Validación", "Todos los campos son obligatorios");
      return;
    }

    if (Platform.OS === 'web' && !/^\d+$/.test(semestre)) {
      alert("Es necesario ingresar solo números en ese apartado");
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
      
      <Text style={styles.titulo}>Registro de Evento Universitario</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre Completo"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Carrera"
        value={carrera}
        onChangeText={setCarrera}
      />

      <TextInput
        style={styles.input}
        placeholder="Semestre"
        value={semestre}
        onChangeText={setSemestre}
        keyboardType="numeric" 
      />

      <Text style={{ fontWeight: 'bold', fontSize: 18, marginVertical: 10 }}>Opciones</Text>

      <View 
        style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <Text>¿Asistirá al taller?</Text>
        <Switch value={asistiraTaller} onValueChange={setAsistiraTaller} />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <Text>¿Requiere constancia?</Text>
        <Switch value={requiereConstancia} onValueChange={setRequiereConstancia} />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 }}>
        <Text>¿Participará en deportes?</Text>
        <Switch value={participaraDeportes} onValueChange={setParticiparaDeportes} />
      </View>

      <Button title="Enviar Registro" onPress={registroCaptura} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});