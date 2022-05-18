import React from "react";

import { Box, Button, ScrollView, Select, Text, TextArea } from "native-base";

import CustormAppbar from "../../components/Appbar";

import { AntDesign } from "@expo/vector-icons";

export default function ClassManagementPage() {
  return (
    <Box safeArea>
      <CustormAppbar />
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
          <Box my={2}>
            <TextArea placeholder="Enter material Details" h={100} />
          </Box>
          <Box my={2}>
            <Button variant="outline" colorScheme="primary" mb={2}>
              Uplode File
            </Button>
          </Box>
          <Box my={2}>
            <Button variant="outline" colorScheme="primary" mb={2}>
              Save
            </Button>
          </Box>
        </ScrollView>
      </Box>
    </Box>
  );
}
