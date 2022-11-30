import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { produtos } from "../database/data";

interface Props {
    route?: {
        params?: {
            codigo: number
        }
    }
}

const ProdutoComponet = (props: Props) => {
    const navigation = useNavigation();
    let codigo = 0;
    if (props.route?.params?.codigo) {
        codigo = props.route?.params?.codigo - 1;
    }
    const produto_1 = produtos[codigo];

    return (
        <View style={styles.viewstyle}>
            {/* <Text style={styles.Text}>
                Código: {produto_1.codigo.toString()}
            </Text> */}
            {/* <Text style={styles.Text}>
                {produto_1.categoria.descricao.toString()}
            </Text> */}
            <Text style={styles.MainText}>
                {produto_1.nome.toString()}
            </Text>
            <Text style={styles.Text}>
                {produto_1.descricao.toString()}
            </Text>
            <Text style={styles.innertext}>
                Valor: {produto_1.valor.toString()} R$
            </Text>

            {/* <Pressable style={styles.button}
                onPress={() => {
                    navigation.navigate("Principal" as never);
                }}
            >
                <Text style={styles.textbutton}>Voltar</Text>
            </Pressable> */}
        </View>
    );
}

export default ProdutoComponet;

const styles = StyleSheet.create({
    MainText: {
        fontSize: 26,
        fontWeight: "bold",
        margin: 10,
        textAlign: "center",
        color: "black"
    },
    Text: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
        marginLeft: 10,
        color: "black"
    },
    innertext: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        marginLeft: 10,
        color: "black"
    },
    viewstyle: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ff611d'
    }
});