import React from "react";

import { Box, Button, Text } from "native-base";

export default function CustomClassNotesData(props) {
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
        {props.source}
      </Text>
      <Text mt={4} fontSize="sm" color="white">
        {props.details}
      </Text>
      <Button mt={4} colorScheme="primary">
        Download
      </Button>
    </Box>
  );
}
