import React from "react";

import { Box, Button, ScrollView } from "native-base";

import CustormAppbar from "../../components/Appbar";
import CustomExamTable from "../../components/ExamTable";

export default function ExamManagementPage() {
  const [Exams, setExams] = React.useState([]);

  return (
    <Box p={2}>
      <ScrollView>
        <CustomExamTable exam={Exams} />
      </ScrollView>
    </Box>
  );
}
