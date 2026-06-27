//zona1: importaciones de componentes y archivos
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegistroScreen from './screens/RegistroScreen.js';

//Zona2: main - hogar de la aplicación, donde se renderizan los componentes y se define la estructura visual de la app
export default function App() {
  return (
    <View style={styles.container}>

      <RegistroScreen/>

    <StatusBar style="auto"/>
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
    flexDirection:'column'
  },
});
