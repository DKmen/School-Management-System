import React from "react";

import { Box, Text } from "native-base";
import { Dimensions, ScrollView, RefreshControl } from "react-native";

export default function AttedanceManagementPage() {
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
          <ScrollView>
            <Box flexDir="row">
              <Text w="50%" borderWidth={1} p={4} fontSize="lg">
                Maths
              </Text>
              <Text
                w="50%"
                borderWidth={1}
                p={4}
                borderLeftWidth={0}
                fontSize="lg"
              >
                68 %
              </Text>
            </Box>
            <Box flexDir="row">
              <Text w="50%" borderWidth={1} p={4} fontSize="lg">
                Physic
              </Text>
              <Text
                w="50%"
                borderWidth={1}
                p={4}
                borderLeftWidth={0}
                fontSize="lg"
              >
                68 %
              </Text>
            </Box>
            <Box flexDir="row">
              <Text w="50%" borderWidth={1} p={4} fontSize="lg">
                Over All
              </Text>
              <Text
                w="50%"
                borderWidth={1}
                p={4}
                borderLeftWidth={0}
                fontSize="lg"
              >
                60 %
              </Text>
            </Box>
          </ScrollView>
        </Box>
      </Box>
    </ScrollView>
  );
}
