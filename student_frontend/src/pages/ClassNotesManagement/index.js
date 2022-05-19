import React from "react";

import { Box, Button, ScrollView, FormControl, Select } from "native-base";
import { Dimensions } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import CustormAppbar from "../../components/Appbar";
import CustomClassNotesData from "../../components/ClassNotes";

export default function ClassNotesManagementPage() {
  return (
    <Box safeArea>
      <CustormAppbar />
      <Box p={2}>
        <FormControl my={2}>
          <FormControl.Label>Select Subject</FormControl.Label>
          <Select
            minWidth="200"
            accessibilityLabel="Class"
            placeholder="Select Subject"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <AntDesign name="caretdown" size={24} color="black" />,
            }}
            onValueChange={(itemValue) => setSubject(itemValue)}
            mt={1}
          >
            <Select.Item label="Maths" value={"Maths"} />
            <Select.Item label="Physics" value={"Physic"} />
            <Select.Item label="Science" value={"Science"} />
          </Select>
        </FormControl>
        <Box h={Dimensions.get("window").height * 0.72} mt={4}>
          <ScrollView>
            <CustomClassNotesData
              details="Ex sunt in aliquip quis proident nostrud officia fugiat sunt
              consectetur sit aliquip do consectetur. Exercitation enim amet"
              source="Admin"
            />
            <CustomClassNotesData
              details="Ex sunt in aliquip quis proident nostrud officia fugiat sunt
              consectetur sit aliquip do consectetur. Exercitation enim amet"
              source="Admin"
            />
            <CustomClassNotesData
              details="Ex sunt in aliquip quis proident nostrud officia fugiat sunt
              consectetur sit aliquip do consectetur. Exercitation enim amet"
              source="Admin"
            />
            <CustomClassNotesData
              details="Ex sunt in aliquip quis proident nostrud officia fugiat sunt
              consectetur sit aliquip do consectetur. Exercitation enim amet"
              source="Admin"
            />
            <CustomClassNotesData
              details="Ex sunt in aliquip quis proident nostrud officia fugiat sunt
              consectetur sit aliquip do consectetur. Exercitation enim amet"
              source="Admin"
            />
            <CustomClassNotesData
              details="Ex sunt in aliquip quis proident nostrud officia fugiat sunt
              consectetur sit aliquip do consectetur. Exercitation enim amet"
              source="Admin"
            />
            <CustomClassNotesData
              details="Ex sunt in aliquip quis proident nostrud officia fugiat sunt
              consectetur sit aliquip do consectetur. Exercitation enim amet"
              source="Admin"
            />
          </ScrollView>
        </Box>
      </Box>
    </Box>
  );
}
