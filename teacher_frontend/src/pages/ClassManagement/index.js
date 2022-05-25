import React from "react";

import {
  Box,
  Button,
  ScrollView,
  Select,
  FormControl,
  TextArea,
} from "native-base";
import * as DocumentPicker from "expo-document-picker";

import { connect } from "react-redux";
import * as Actions from "../../hooks/action";

import { AntDesign } from "@expo/vector-icons";

function ClassManagementPage(props) {
  const [examClass, setExamClass] = React.useState({});
  const [subject, setSubject] = React.useState("");
  const [file, setFiles] = React.useState("");

  React.useState(() => {
    props.fetchClass();
  }, []);

  return (
    <Box>
      <Box p={2}>
        <ScrollView>
          <Box my={2}>
            <FormControl my={2}>
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
                onValueChange={(item) => setExamClass(item)}
              >
                {props.data.Class.map((item) => (
                  <Select.Item label={item.STD} value={item} />
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box my={2}>
            <FormControl my={2}>
              <FormControl.Label>Select Subject</FormControl.Label>
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
                onValueChange={(itemValue) => setSubject(itemValue)}
                mt={1}
              >
                {examClass?.Subjects?.map((item) => (
                  <Select.Item label={item.Subject_Name} value={item._id} />
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box my={2}>
            <TextArea placeholder="Enter material Details" h={100} />
          </Box>
          <Box my={2}>
            <Button variant="outline" colorScheme="primary" mb={2} onPress={async () => {
              try {
                let result = await DocumentPicker.getDocumentAsync({});
                setFiles(result);
              } catch (err) {
                console.warn(err);
              }
            }}>
              Uplode File
            </Button>
          </Box>
          <Box my={2}>
            <Button variant="outline" colorScheme="primary" mb={2}>
              Save
            </Button>
          </Box>
        </ScrollView>
      </Box>
    </Box>
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassManagementPage);
