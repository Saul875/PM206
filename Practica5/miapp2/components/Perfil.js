/* Usando Desestructuración */
import { View, Text, Button, StyleSheet } from 'react-native';
import React, {useState} from 'react';

export const Perfil = ({nombre,carrera,materia,cuatri,estiloE}) => {
    
    const [mostrar,setMostrar]= useState(false)

    return (

        <View style={[estilos.tarjeta,estiloE]}>

            <Text style={[estilos.nombre]}> {nombre}</Text>
            { mostrar &&
            <>
            <Text style={estilos.carrera}> {carrera}</Text>
            <Text style={estilos.otroTexto}> {materia}</Text>
            <Text style={estilos.otroTexto}> {cuatri}</Text>
            </>
            }
            <Button title= "Mostrar Perfil"
            onPress={()=> setMostrar(!mostrar) }
            />

        </View>
    )
}

const estilos= StyleSheet.create({
    nombre:{
    fontSize:24,
    fontWeight: 700,
    textTransform:"uppercase"
    },
    carrera:{
        fontSize:18,
        color:'blue',
        fontFamily:'Roboto'
    },
    otroTexto:{
        fontSize:12,
        fontFamily:'Courier',
        fontFamily:'Italic'
    },
    tarjeta:{
        borderWidth: 3,
        margin:20,
        padding:25,
    },
});

/* Perfil usando props */
/* import { Text } from 'react-native';

export const Perfil = (props) => {
    return (

        <view>

            <Text> {props.nombre} Nombre: Saúl Silva Ongay</Text>

            <Text> {props.carrera} Carrera: Sistemas Computacionales</Text>

            <Text> {props.materia} Materia: Programación Móvil</Text>

            <Text> {props.cuatri} Noveno cuatrimestre</Text>

        </view>

    )
} */
