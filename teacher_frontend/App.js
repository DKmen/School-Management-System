import React from "react";
import "react-native-gesture-handler";
import { NativeBaseProvider, Box } from "native-base";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import NoticeBordPage from "./src/pages/NoticeBord";
import ClassManagementPage from "./src/pages/ClassManagement";
import ExamManagementPage from "./src/pages/ExamManagement";
import StudentManagementPage from "./src/pages/StudentManagement";

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Notice Bord">
          <Drawer.Screen name="Notice Bord" component={NoticeBordPage} />
          <Drawer.Screen
            name="Exam Management"
            component={ExamManagementPage}
          />
          <Drawer.Screen
            name="Class Management"
            component={ClassManagementPage}
          />
          <Drawer.Screen
            name="Student Management"
            component={StudentManagementPage}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
