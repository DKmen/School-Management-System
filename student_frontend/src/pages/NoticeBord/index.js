import React from "react";

import { Box, Button, Text } from "native-base";
import { Dimensions, ScrollView, RefreshControl } from "react-native";

import CustormAppbar from "../../components/Appbar";

import CustomNoticeData from "../../components/Notice";

export default function NoticeBordPage() {
  return (
    <ScrollView refreshControl={<RefreshControl />}>
      <Box p={2}>
        <Box px={2} height={550}>
          <ScrollView>
            <CustomNoticeData
              date="12-02-2022"
              details="Ex sunt in aliquip quis proident nostrud officia fugiat sunt
              consectetur sit aliquip do consectetur. Exercitation enim amet"
              source="Admin"
            />
          </ScrollView>
        </Box>
      </Box>
    </ScrollView>
  );
}
