import React from "react";

import { Box, ScrollView, Divider, Text, Checkbox } from "native-base";

import { AntDesign } from "@expo/vector-icons";

export default function CustormStudentTable() {
  return (
    <Box>
      <Box p={2}>
        <ScrollView>
          <ScrollView horizontal>
            <Box flexDir="column">
              <Box flexDir="row" py={2}>
                <Box w={50} alignItems="center">
                  <Text fontSize="md" fontWeight="extrabold">
                    No.
                  </Text>
                </Box>
                <Box w={200} alignItems="center">
                  <Text fontSize="md" fontWeight="extrabold">
                    Student Name
                  </Text>
                </Box>
                <Box w={150} alignItems="center">
                  <Text fontSize="md" fontWeight="extrabold">
                    Student ID
                  </Text>
                </Box>
                <Box w={50} alignItems="center"></Box>
              </Box>
              <Divider />
              <Box flexDir="row" py={2}>
                <Box w={50} alignItems="center">
                  <Text fontSize="md">1</Text>
                </Box>
                <Box w={200} alignItems="center">
                  <Text fontSize="md">Drimil Mendapara</Text>
                </Box>
                <Box w={150} alignItems="center">
                  <Text fontSize="md">190201</Text>
                </Box>
                <Box w={50} alignItems="center">
                  <Checkbox value={true} defaultIsChecked />
                </Box>
              </Box>
            </Box>
          </ScrollView>
        </ScrollView>
      </Box>
    </Box>
  );
}
