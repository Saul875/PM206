//zona1: importaciones de componentes y archivos
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//Zona2: main - hogar de la aplicación, donde se renderizan los componentes y se define la estructura visual de la app
export default function imageBackgroud() {
  return (
    <View style={styles.container}>

    <Text> Aquí va la práctica de Diego Rivera </Text>

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
    flexDirection:'row'
  },
});
