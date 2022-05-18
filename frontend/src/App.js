import React from "react";

// import FeesManagementPage from "./Pages/Admin/FeesManagement";
// import FinanceManagementPage from "./Pages/Admin/FinanceManagement";
// import StudentManagementPage from "./Pages/Admin/StudentManagement";
// import SubjectManagementPage from "./Pages/Admin/SubjectManagement";
// import ClassManagementPage from "./Pages/Admin/ClassManagement";
// import TeacherManagementPage from "./Pages/Admin/TeacherManagement";
// import NoticeBordPage from "./Pages/Admin/NoticeBord";
// import LoginPage from "./Pages/Auth/login";
import TeacherNoticeBordPage from "./Pages/Teacher/NoticeBord";
import TeacherClassManagementPage from "./Pages/Teacher/ClassManagement";

export default function App() {
  return (
    <>
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
      <TeacherClassManagementPage />
    </>
  );
}
