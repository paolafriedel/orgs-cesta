import React from "react"; 
import {StyleSheet, View, ScrollView} from "react-native";
import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Itens from './componentes/Itens';

export default function Cesta({topo, detalhes, itens}) {
    return <ScrollView>
    
    <Topo {...topo}/>

    <View style={estilos.cesta}>
        <Detalhes {...detalhes}/>
    </View>
    <Itens {...itens}/>
    </ScrollView>
    
}

const estilos = StyleSheet.create({
    
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    },

})