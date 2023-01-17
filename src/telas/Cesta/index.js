import React from "react"; 
import {StyleSheet, Image, Dimensions, Text, View} from "react-native";
import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Itens from './componentes/Itens';

export default function Cesta({topo, detalhes, itens}) {
    return <>
    
    <Topo {...topo}/>

    <View style={estilos.cesta}>
        <Detalhes {...detalhes}/>
    </View>
    <Itens {...itens}/>
    </>
    
}

const estilos = StyleSheet.create({
    
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    },

})