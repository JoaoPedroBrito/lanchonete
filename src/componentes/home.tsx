import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, FlatList, Pressable, Alert, StyleSheet } from "react-native";
import { Icon } from "react-native-vector-icons/Icon";
import { produtos } from "../database/data";
import { Produto } from "../entidades/produto";

interface ItemLista {
    produto: Produto;
}

const Item = ({ produto }: ItemLista) => {
    const navigation = useNavigation();
    return (
        <View>
            <Pressable
                onPress={() => {
                    navigation.navigate(
                        'Produto' as never,
                        { codigo: produto.codigo } as never);
                }}
            >
                <Text style={styles.Text}>{produto.nome}</Text>
                <Text style={styles.innertext}>A partir de R${produto.valor} </Text>
            </Pressable>
        </View>
    )
}


function fnRenderItem({ item }: any) {
    return (
        <View style={styles.cards}>
            <Item produto={item}></Item>
        </View>
    )
}

const Home = () => {
    return (
        <View style={styles.viewstyle}>
            <Text style={styles.MainText}>
                Produtos
            </Text>
            <FlatList
                data={produtos}
                renderItem={fnRenderItem}
            />
        </View>
    );
}

export default Home;

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
        color: "#39392d",
    },
    viewstyle: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ff611d'
    },
    cards: {
        flex: 0.3,
        backgroundColor: "#ffb80e",
        borderWidth: 3,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        margin: 5,
        borderColor: "#813531"
    },
});