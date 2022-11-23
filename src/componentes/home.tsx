import React from "react";
import { View, Text, FlatList, Pressable, Alert } from "react-native";
import { produtos } from "../database/data";
import { Produto } from "../entidades/produto";

interface ItemLista {
    produto: Produto;
}

const Item = ({ produto }: ItemLista) => {
    return (
        <View>
            <Text>Nome: {produto.nome}</Text>
            <Text>Valor: {produto.valor}</Text>
            <Pressable
                onPress={() => {
                    Alert.alert(`codigo: ${produto.codigo}`);
                }}
            ><Text>Click</Text></Pressable>
        </View>
    )
}


function fnRenderItem({ item }: any) {
    return (
        <View>
            <Item produto={item}></Item>
            <Text>----------------------</Text>
        </View>
    )
}

const Home = () => {
    // const produto_1 = {
    //     codigo: 1,
    //     nome: "Hot-Dog",
    //     descricao: "Pão e salsicha",
    //     valor: 7.50,
    //     categoria: {
    //         codigo: 1,
    //         descricao: "Lanche"
    //     }
    // };

    // const produto_2 = {
    //     codigo: 2,
    //     nome: "Hot-Dogão",
    //     descricao: "Pão e salsicha e salsicha",
    //     valor: 10.50,
    //     categoria: {
    //         codigo: 1,
    //         descricao: "Lanche"
    //     }
    // };

    // const produtos = [
    //     produto_1,
    //     produto_2
    // ];

    //return (<Item produto={produto_1}></Item>);
    return (
        <View>
            <Text style={{ textAlign: "center" }}>
                Lista de Produto
            </Text>
            <FlatList
                data={produtos}
                renderItem={fnRenderItem}
            />
        </View>
    );
}

export default Home;