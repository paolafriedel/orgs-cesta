import React from "react";
import Texto from '../../../componentes/Texto';
import {Image, View, StyleSheet, FlatList} from "react-native";

export default function Itens({titulo, lista}){
    
    const renderItem = ({item:{nome, imagem}}) =>  <View key={nome} style={estilos.item}>
        <Image source={imagem} style={estilos.imagem}></Image>
        <Texto style={estilos.nome}>{nome}</Texto>
    </View>
    
    return <>
    <Texto style={estilos.titulo}>{titulo}</Texto>
    <FlatList
        data={lista}
        renderItem={renderItem}
        keyExtractor={({nome}) => nome}
    />
    </>
}

const estilos = StyleSheet.create({
    titulo:{
       color:"#464646",
       fontWeight:"bold",
       marginTop: 10,
       marginBottom: 5,
       fontSize: 20,
       lineHeight: 32,
       padding: 16
    },

    item:{
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        alignItems:"center",
        
    },
    imagem:{
        width:46,
        height:46,
        marginLeft: 16

    },
    nome:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color:"#464646"

    }
})