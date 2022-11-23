import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { produtos } from "../database/data";

const ProdutoComponet = () => {
    const navigation = useNavigation();
    const produto_1 = produtos[0];

    return (
        <View>
            <TextInput
                placeholder="Código:"
                value={produto_1.codigo.toString()}
            >
            </TextInput>
            <TextInput
                placeholder="Nome:"
                value={produto_1.nome.toString()}
            >
            </TextInput>
            <TextInput
                placeholder="Descrição:"
                value={produto_1.descricao.toString()}
            >
            </TextInput>
            <TextInput
                placeholder="Valor:"
                value={produto_1.valor.toString()}
            >
            </TextInput>
            <TextInput
                placeholder="Categoria:"
                value={produto_1.categoria.descricao.toString()}
            >
            </TextInput>
            <Pressable
                onPress={() => {
                    navigation.navigate("Principal" as never);
                }}
            >
                <Text>Voltar</Text>
            </Pressable>
        </View>
    );
}

export default ProdutoComponet;