import React from "react";

import { Box, Text } from "native-base";

export default function CustomNoticeData(props) {
  return (
    <Box
      borderWidth={1}
      borderRadius={4}
      p={2}
      my={2}
      borderColor="#3339FF"
      bgColor="#3339FF"
    >
      <Text fontSize="md" color="white">
        {props.date}
      </Text>
      <Text mt={2} fontSize="sm" color="white">
        {props.details}
      </Text>
      <Text mt={2} fontSize="sm" color="white" fontWeight="extrabold">
        Notice By : {props.source}
      </Text>
    </Box>
  );
}
