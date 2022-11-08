import React from "react";
import { View, Text } from "react-native";

interface ItemLista {
    nome: string;
}

const Item = ({ nome }: ItemLista) => {
    return (
        <View>
            <Text>Nome: {nome}</Text>
        </View>
    )
}

const Home = () => {
    return (<Item nome="Joao"></Item>);
}

export default Home;