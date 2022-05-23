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
import { connect } from "react-redux";

import * as Actions from "../hooks/action";

import { AntDesign } from "@expo/vector-icons";

function CustomNoticeBordForm(props) {

  const [NoticeTitle, setNoticeTitle] = React.useState("");
  const [NoticeDetails, setNoticeDetails] = React.useState("");
  const [Class, setClass] = React.useState("");

  React.useEffect(() => {
    props.fetchClass();
  }, [])

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
                <Input onChangeText={(text) => setNoticeTitle(text)} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Notice Details</FormControl.Label>
                <TextArea onChangeText={(text) => setNoticeDetails(text)} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Select Class</FormControl.Label>
                <Select
                  minWidth="200"
                  accessibilityLabel="Class"
                  placeholder="Select Class"
                  onValueChange={(value) => setClass(value)}
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: (
                      <AntDesign name="caretdown" size={24} color="black" />
                    ),
                  }}
                  mt={1}
                >
                  {props?.data.Class.map((item) => {
                    return <Select.Item label={item.STD} value={item.Class_Id} />
                  })}
                </Select>
              </FormControl>
              <FormControl mt={4}>
                <Button
                  variant="outline"
                  colorScheme="primary"
                  mb={2}
                  onPress={(_) => {
                    props.createNotice({
                      "Notice_Title": NoticeTitle,
                      "Notice_Details": NoticeDetails,
                      "Classes_Id": [
                        {
                          "Class_Id": Class
                        }
                      ]
                    })
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

const mapStateToProps = (state) => {
  return {
    data: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchClass: () => dispatch(Actions.FetchClass()),
    createNotice: (data) => dispatch(Actions.CreateNotice(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomNoticeBordForm);