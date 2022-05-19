import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import NoticeBordPage from "./src/pages/NoticeBord";
import ExamManagementPage from "./src/pages/ExamManagement";
import ClassNotesManagementPage from "./src/pages/ClassNotesManagement";

export default function App() {
  return (
    <NativeBaseProvider>
      {/* <NoticeBordPage /> */}
      {/* <ExamManagementPage /> */}
      <ClassNotesManagementPage />
    </NativeBaseProvider>
  );
}
