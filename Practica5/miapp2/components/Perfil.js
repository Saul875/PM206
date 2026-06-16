/* Usando Desestructuración */
import { View, Text, Button } from 'react-native';
import React, {useState} from 'react';

export const Perfil = ({nombre,carrera,materia,cuatri}) => {
    
    const [mostrar,setMostrar]= useState(false)

    return (

        <view>

            <Text> {nombre}</Text>
            { mostrar &&
            <>
            <Text> {carrera}</Text>
            <Text> {materia}</Text>
            <Text> {cuatri}</Text>
            </>
            }
            <Button title= "Mostrar Perfil"
            onPress={()=> setMostrar(!mostrar) }
            />

        </view>
    )
}


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
