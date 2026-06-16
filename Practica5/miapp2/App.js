//zona1: importaciones de componentes y archivos
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Perfil } from './components/Perfil';

//Zona2: main - hogar de la aplicación, donde se renderizan los componentes y se define la estructura visual de la app
export default function App() {
  return (
    <View style={styles.container}>

    <Perfil nombre="Saul Silva" carrera="Sistemas" materia="P Movil" cuatri="noveno" ></Perfil>

    <Text>___________________________________________________________________________</Text>

    <Text>___________________________________________________________________________</Text>

    <Perfil 
    nombre="Fred Durst" 
    carrera="Musica" 
    materia="Limp Biskit" 
    cuatri="xd" >
    </Perfil>

    <Perfil> </Perfil>

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
});
