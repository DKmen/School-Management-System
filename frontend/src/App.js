import React from "react";

import StudentManagementPage from "./Pages/Admin/StudentManagement";
import SubjectManagementPage from "./Pages/Admin/SubjectManagement";
import ClassManagementPage from "./Pages/Admin/ClassManagement";
import TeacherManagementPage from "./Pages/Admin/TeacherManagement";
import NoticeBordPage from "./Pages/Admin/NoticeBord";
import LoginPage from "./Pages/Auth/login";

export default function App() {
  return (
    <div>
      {/* <LoginPage /> */}
      {/* <NoticeBordPage /> */}
      {/* <ClassManagementPage /> */}
      {/* <TeacherManagementPage /> */}
      {/* <StudentManagementPage /> */}
      <SubjectManagementPage />
    </div>
  );
}
