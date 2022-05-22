import React from "react";
import "react-native-gesture-handler";
import { NativeBaseProvider, Box } from "native-base";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./src/hooks/reducer";

import DrawerScreen from "./src/pages";
import LoginPage from "./src/pages/LoginScreen";

const store = createStore(reducers, applyMiddleware(thunk));

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store} >
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Home" options={{
              headerShown: false
            }} component={DrawerScreen} />
            <Stack.Screen name="Login" options={{
              headerTitleAlign: 'center'
            }} component={LoginPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
