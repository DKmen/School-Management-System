import React from "react";

import { Box, Button, ScrollView } from "native-base";

import CustomExamTable from "../../components/ExamTable";
import CustomExamForm from "../../components/ExamForm";

export default function ExamManagementPage() {
  const [openExamForm, setOpenExamForm] = React.useState(false);
  const [Exams, setExams] = React.useState([]);

  return (
    <Box>
      <Box p={2}>
        <ScrollView>
          <Box my={2}>
            <Button
              variant="outline"
              colorScheme="primary"
              mb={2}
              onPress={(_) => setOpenExamForm(true)}
            >
              Schedule Exam
            </Button>
          </Box>
          <CustomExamTable exam={Exams} />
        </ScrollView>
        <CustomExamForm
          formOpen={setOpenExamForm}
          isOpen={openExamForm}
          addExams={setExams}
          data={Exams}
        />
      </Box>
    </Box>
  );
}
