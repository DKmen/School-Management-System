import React from "react";

import { Box, Button } from "native-base";
import { Dimensions, ScrollView, RefreshControl } from "react-native";

import CustormAppbar from "../../components/Appbar";
import CustomExamTable from "../../components/ExamTable";

export default function ExamManagementPage() {
  const [Exams, setExams] = React.useState([]);

  return (
    <Box p={2}>
      <ScrollView refreshControl={<RefreshControl />}>
        <CustomExamTable exam={Exams} />
      </ScrollView>
    </Box>
  );
}
