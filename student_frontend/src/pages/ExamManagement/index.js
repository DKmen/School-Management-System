import React from "react";

import { Box, Button, ScrollView } from "native-base";

import CustormAppbar from "../../components/Appbar";
import CustomExamTable from "../../components/ExamTable";
import CustomExamForm from "../../components/ExamForm";

export default function ExamManagementPage() {
  const [openExamForm, setOpenExamForm] = React.useState(false);
  const [Exams, setExams] = React.useState([
    {
      startDate: "12-02-2022",
      endDate: "14-02-2022",
      class: "Class 1",
      prepareBy: "Martin Parmer",
      exams: [
        {
          startTime: "09:30",
          endTime: "12:30",
          date: "12-02-2022",
          subject: "maths",
        },
        {
          startTime: "09:30",
          endTime: "12:30",
          date: "13-02-2022",
          subject: "science",
        },
        {
          startTime: "09:30",
          endTime: "12:30",
          date: "14-02-2022",
          subject: "physic",
        },
      ],
    },
    {
      startDate: "12-02-2022",
      endDate: "14-02-2022",
      class: "Class 1",
      prepareBy: "Martin Parmer",
      exams: [
        {
          startTime: "10:30",
          endTime: "13:30",
          date: "12-02-2022",
          subject: "maths",
        },
        {
          startTime: "10:30",
          endTime: "13:30",
          date: "13-02-2022",
          subject: "science",
        },
        {
          startTime: "10:30",
          endTime: "13:30",
          date: "14-02-2022",
          subject: "physic",
        },
      ],
    },
  ]);

  return (
    <Box safeArea>
      <CustormAppbar />
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
        <CustomExamForm formOpen={setOpenExamForm} isOpen={openExamForm} />
      </Box>
    </Box>
  );
}
