import React from "react";

import { Box, Button, ScrollView, Text } from "native-base";

import CustormAppbar from "../../components/Appbar";

import { AntDesign } from "@expo/vector-icons";
import CustomNoticeData from "../../components/Notice";

export default function NoticeBordPage() {
  return (
    <Box safeArea>
      <CustormAppbar />
      <Box p={2}>
        <ScrollView>
          <Button variant="outline" colorScheme="primary" mb={2}>
            Add Notice
          </Button>
          <Box px={2} height={550} borderWidth={1} borderRadius={4}>
            <ScrollView>
              <CustomNoticeData
                date="12-02-2022"
                details="Ex sunt in aliquip quis proident nostrud officia fugiat sunt
              consectetur sit aliquip do consectetur. Exercitation enim amet"
                source="Admin"
              />
            </ScrollView>
          </Box>
        </ScrollView>
      </Box>
    </Box>
  );
}
