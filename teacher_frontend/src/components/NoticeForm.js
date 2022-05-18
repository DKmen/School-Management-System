import React from "react";

import {
  ScrollView,
  Modal,
  Center,
  FormControl,
  Input,
  TextArea,
  Select,
  Button,
} from "native-base";
import { Dimensions } from "react-native";

import { AntDesign } from "@expo/vector-icons";

export default function CustomNoticeBordForm(props) {
  return (
    <Center>
      <Modal
        isOpen={props.isOpen}
        onClose={() => props.formOpen(false)}
        w={Dimensions.get("window").width}
      >
        <Modal.Content maxWidth={600}>
          <Modal.CloseButton />
          <Modal.Header>Enter Notice</Modal.Header>
          <Modal.Body>
            <ScrollView>
              <FormControl>
                <FormControl.Label>Notice Title</FormControl.Label>
                <Input />
              </FormControl>
              <FormControl>
                <FormControl.Label>Notice Details</FormControl.Label>
                <TextArea />
              </FormControl>
              <FormControl>
                <FormControl.Label>Select Class</FormControl.Label>
                <Select
                  minWidth="200"
                  accessibilityLabel="Class"
                  placeholder="Select Class"
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: (
                      <AntDesign name="caretdown" size={24} color="black" />
                    ),
                  }}
                  mt={1}
                >
                  <Select.Item label="Class 1" value={1} />
                  <Select.Item label="Class 2" value={2} />
                  <Select.Item label="Class 3" value={3} />
                </Select>
              </FormControl>
              <FormControl mt={4}>
                <Button
                  variant="outline"
                  colorScheme="primary"
                  mb={2}
                  onPress={(_) => {
                    props.formOpen(false);
                  }}
                >
                  Save Notice
                </Button>
              </FormControl>
            </ScrollView>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Center>
  );
}
