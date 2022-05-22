import React from "react";
import "react-native-gesture-handler";
import { NativeBaseProvider, Box } from "native-base";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import NoticeBordPage from "./NoticeBord";
import ClassManagementPage from "./ClassManagement";
import ExamManagementPage from "./ExamManagement";
import StudentManagementPage from "./StudentManagement";

export default function DrawerScreen() {
    const Drawer = createDrawerNavigator();
    return (
        <NativeBaseProvider>
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
        </NativeBaseProvider>
    );
}
