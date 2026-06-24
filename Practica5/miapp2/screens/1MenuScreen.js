//zona1: importaciones de componentes y archivos
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{ useState } from 'react';
import { FlatList } from 'react-native-web';
import ActIndicatorScreen from './ActIndicatorScreen';
import FlatSectionListScreen from './FlatSectionListScreen';
import ImageBackgroundScreen from './ImageBackgroundScreen';
import ModalScreen from './ModalScreen';
import PressableScreen from './PressableScreen';
import SafeAreaScreen from './SafeAreaScreen';
import TarjetasScreen from './TarjetasScreen';
import TextInputScreen from './TextInputScreen';

//Zona2: main - hogar de la aplicación, donde se renderizan los componentes y se define la estructura visual de la app
export default function MenuScreen() {

    const [screen, setScreen]= useState('menu');

    switch(screen){
        case 'actIndicator':
            return <ActIndicatorScreen/>

        case 'flatSectionList':
            return <FlatSectionListScreen/>

        case 'imageBackgroud':
            return <ImageBackgroundScreen/>

        case 'modal':
            return <ModalScreen/>

        case 'pressable':
            return <PressableScreen/>

        case 'safeArea':
            return <SafeAreaScreen/>

        case 'tarjetas':
            return <TarjetasScreen/>

        case 'textInput':
            return <TextInputScreen/>

        case 'menu':
            default:
            return (
                <View style={styles.container}>

                    <Text> Menú de prácticas </Text>

                    <Button onPress={()=>setScreen('actIndicator')} title='ActivityIndicator & KeyboardAvoidingView'/> 

                    <Button onPress={()=>setScreen('flatSectionList')} title='FlatSectionList'/>

                    <Button onPress={()=>setScreen('imageBackgroud')} title='ImageBackground & SlapshScreen'/>

                    <Button onPress={()=>setScreen('modal')} title='Modal'/>

                    <Button onPress={()=>setScreen('pressable')} title='Pressable & Switch'/> 

                    <Button onPress={()=>setScreen('safeArea')} title='SafeAreaView & ScrollView'/>

                    <Button onPress={()=>setScreen('tarjetas')} title='Tarjetas'/> 

                    <Button onPress={()=>setScreen('textInput')} title='TextInput & Alert'/>

                    <StatusBar style="auto"/>
                </View>
            );
    }
}

//Zona3: estilos - define los estilos para los componentes de la aplicación, en este caso, el contenedor principal
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c40000bb',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
  },
});
