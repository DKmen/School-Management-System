import React from "react";

import { Avatar, Box, IconButton, Text } from "native-base";

import { Feather } from "@expo/vector-icons";

export default function CustormAppbar(props) {
  console.log(props)
  return (
    <Box
      px={4}
      py={2}
      bgColor="#3339FF"
      display="flex"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      position="static"
      top={0}
    >
      <Box display="flex" flexDir="row" alignItems="center">
        <Box mr={2}>
          <IconButton icon={<Feather name="menu" size={24} color="white" />} />
        </Box>
        <Text fontSize="xl" color="white" fontWeight="bold">
          School Name
        </Text>
      </Box>
      <Box>
        <Avatar size="sm" bgColor="white" _text={{ color: "#3339FF" }}>
          D
        </Avatar>
      </Box>
    </Box>
  );
}
