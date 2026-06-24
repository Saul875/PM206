//zona1: importaciones de componentes y archivos
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Perfil } from '../components/Perfil';

//Zona2: main - hogar de la aplicación, donde se renderizan los componentes y se define la estructura visual de la app
export default function TarjetasScreen() {
  return (
    <View style={styles.container}>

    <Perfil estiloE={styles.tarjetaRoja} nombre="Saul Silva" carrera="Sistemas" materia="P Movil" cuatri="noveno" ></Perfil>


    <Perfil 
    estiloE={styles.tarjetaVerde}
    nombre="Fred Durst" 
    carrera="Musica" 
    materia="Limp Biskit" 
    cuatri="xd" >
    </Perfil>

    <Perfil estiloE={styles.tarjetaRoja} nombre="Saul Silva2" carrera="Sistemas" materia="P Movil" cuatri="noveno" ></Perfil>


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
    tarjetaRoja:{ backgroundColor:'#FF6B6B'},
    tarjetaVerde:{ backgroundColor:'#6BCB77'},
  });
