import React from "react";

// import FeesManagementPage from "./Pages/Admin/FeesManagement";
// import FinanceManagementPage from "./Pages/Admin/FinanceManagement";
// import StudentManagementPage from "./Pages/Admin/StudentManagement";
// import SubjectManagementPage from "./Pages/Admin/SubjectManagement";
import ClassManagementPage from "./Pages/Admin/ClassManagement";
import AddClass from "./Components/Admin/Forms/AddClass";
import AddStudent from "./Components/Admin/Forms/AddStudent";
// import TeacherManagementPage from "./Pages/Admin/TeacherManagement";
// import NoticeBordPage from "./Pages/Admin/NoticeBord";
// import LoginPage from "./Pages/Auth/Login/index"
import TeacherNoticeBordPage from "./Pages/Teacher/NoticeBord";
import TeacherClassManagementPage from "./Pages/Teacher/ClassManagement";
import Login from "./Pages/Admin/Auth/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/login.css"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/login" element={<Login />}/>
          <Route path="/classes" element={<ClassManagementPage/>} />
          <Route path="/classes/add" element={<AddClass />}/>
        </Routes>
      </BrowserRouter>
      {/* <LoginPage /> */}
      {/* <NoticeBordPage /> */}
      {/* <ClassManagementPage /> */}
      {/* <TeacherManagementPage /> */}
      {/* <StudentManagementPage /> */}
      {/* <SubjectManagementPage /> */}
      {/* <FeesManagementPage /> */}
      {/* <FinanceManagementPage /> */}
      {/* <ExamManagementPage /> */}
      {/* <TeacherNoticeBordPage /> */}
      {/* <TeacherClassManagementPage /> */}
    </>
  );
}
