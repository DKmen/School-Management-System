import React from "react";
import "react-native-gesture-handler";
import { NativeBaseProvider } from "native-base";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./src/hooks/reducer";

import NoticeBordPage from "./src/pages/NoticeBord";
import ExamManagementPage from "./src/pages/ExamManagement";
import ClassNotesManagementPage from "./src/pages/ClassNotesManagement";
import AttedanceManagementPage from "./src/pages/AttedanceManagement";
import ProfileManagementPage from "./src/pages/ProfileManagement";

const store = createStore(reducers, applyMiddleware(thunk));

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer >
          <Drawer.Navigator initialRouteName="Notice Bord">
            <Drawer.Screen name="Notice Bord" component={NoticeBordPage} />
            <Drawer.Screen
              name="Exam Management"
              component={ExamManagementPage}
            />
            <Drawer.Screen
              name="Class Notes"
              component={ClassNotesManagementPage}
            />
            <Drawer.Screen
              name="Attedance Management"
              component={AttedanceManagementPage}
            />
            <Drawer.Screen name="Profile" component={ProfileManagementPage} />
          </Drawer.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
