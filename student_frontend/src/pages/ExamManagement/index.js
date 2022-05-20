import React from "react";

import { Box, Button } from "native-base";
import { ScrollView, RefreshControl } from "react-native";

import CustormAppbar from "../../components/Appbar";
import CustomExamTable from "../../components/ExamTable";

export default function ExamManagementPage() {
  const [Exams, setExams] = React.useState([]);

  return (
    <ScrollView refreshControl={<RefreshControl />}>
      <Box p={2}>
        <CustomExamTable exam={Exams} />
      </Box>
    </ScrollView>
  );
}
