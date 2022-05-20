import React from "react";

import { Box, Text } from "native-base";
import { Dimensions, ScrollView, RefreshControl } from "react-native";

import CustormAppbar from "../../components/Appbar";

export default function ProfileManagementPage() {
  return (
    <ScrollView refreshControl={<RefreshControl />}>
      <Box p={2}>
        <Box
          h={Dimensions.get("window").height * 0.8}
          mt={4}
          p={4}
          borderWidth={2}
          borderColor="blue.300"
          borderRadius={6}
        >
          <Box flexDir="row">
            <Text w="50%" borderWidth={1} p={4} fontSize="md">
              Student Name
            </Text>
            <Text
              w="50%"
              borderWidth={1}
              p={4}
              borderLeftWidth={0}
              fontSize="md"
            >
              Drimil Mendapara K
            </Text>
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
}
