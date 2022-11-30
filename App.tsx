import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "./src/componentes/home";
import ProdutoComponet from "./src/componentes/produto";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Principal">
        <Stack.Screen name="Principal" component={Home} />
        <Stack.Screen name="Produto" component={ProdutoComponet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
