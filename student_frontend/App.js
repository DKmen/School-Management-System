import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import NoticeBordPage from "./src/pages/NoticeBord";
import ClassManagementPage from "./src/pages/ClassManagement";
import ExamManagementPage from "./src/pages/ExamManagement";

export default function App() {
  return (
    <NativeBaseProvider>
      {/* <NoticeBordPage /> */}
      {/* <ClassManagementPage /> */}
      <ExamManagementPage />
    </NativeBaseProvider>
  );
}
