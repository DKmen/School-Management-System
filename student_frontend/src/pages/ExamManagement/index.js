import React from "react";

import { Box, Button, ScrollView, Select, Text, TextArea } from "native-base";

import CustormAppbar from "../../components/Appbar";

export default function ExamManagementPage() {
  return (
    <Box safeArea>
      <CustormAppbar />
      <Box p={2}>
        <ScrollView>
          <Box my={2}>
            <Button variant="outline" colorScheme="primary" mb={2}>
              Schedule Exam
            </Button>
          </Box>
        </ScrollView>
      </Box>
    </Box>
  );
}
