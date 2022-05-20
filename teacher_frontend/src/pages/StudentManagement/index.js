import React from "react";

import { Box, Button, ScrollView, Select } from "native-base";
import { Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import CustormStudentTable from "../../components/StudentTable";

export default function StudentManagementPage() {
  return (
    <Box>
      <Box p={2}>
        <ScrollView>
          <Box my={2}>
            <Select
              minWidth="200"
              accessibilityLabel="Class"
              placeholder="Select Class"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <AntDesign name="caretdown" size={24} color="black" />,
              }}
              mt={1}
            >
              <Select.Item label="Class 1" value={1} />
              <Select.Item label="Class 2" value={2} />
              <Select.Item label="Class 3" value={3} />
            </Select>
          </Box>
          <Box my={2}>
            <Select
              minWidth="200"
              accessibilityLabel="Subject"
              placeholder="Select Subject"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <AntDesign name="caretdown" size={24} color="black" />,
              }}
              mt={1}
            >
              <Select.Item label="Mathematic" value={1} />
              <Select.Item label="Science" value={2} />
              <Select.Item label="Physics" value={3} />
            </Select>
          </Box>
          <Box my={2} h={Dimensions.get("window").height * 0.6}>
            <CustormStudentTable />
          </Box>
          <Box>
            <Button>Save Attedance</Button>
          </Box>
        </ScrollView>
      </Box>
    </Box>
  );
}
