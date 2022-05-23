import React from "react";

import {
  Box,
  Button,
  Divider,
  Text,
  Modal,
  Center,
} from "native-base";
import { Dimensions, ScrollView } from "react-native";

import * as Actions from "../hooks/action";

import { connect } from "react-redux";

function CustomExamTable(props) {
  const [showModal, setShowModal] = React.useState(false);
  const [currentExam, setCurrentExam] = React.useState({});

  console.log(props.data);

  React.useEffect(() => {
    props.fetchExam();
  }, [])

  return (
    <Box my={2} p={1} maxHeight={Dimensions.get("screen").height * 0.6}>
      <ScrollView>
        <ScrollView horizontal>
          <Box flexDir="column">
            <Box flexDir="row" px={2} py={2}>
              <Box w={50} alignItems="center">
                <Text fontSize="md" fontWeight="extrabold">
                  No.
                </Text>
              </Box>
              <Box w={150} alignItems="center">
                <Text fontSize="md" fontWeight="extrabold">
                  Start on
                </Text>
              </Box>
              <Box w={100} alignItems="center">
                <Text fontSize="md" fontWeight="extrabold">
                  End on
                </Text>
              </Box>
              <Box w={100} alignItems="center">
                <Text fontSize="md" fontWeight="extrabold">
                  Class
                </Text>
              </Box>
              <Box w={150} alignItems="center">
                <Text fontSize="md" fontWeight="extrabold">
                  Preper by
                </Text>
              </Box>
            </Box>
            <Divider />
            {props.data.Exams.map((item, index) => (
              <>
                <Box flexDir="row" px={2} py={2}>
                  <Box w={50} alignItems="center">
                    <Text fontSize="md">{index + 1}</Text>
                  </Box>
                  <Box w={150} alignItems="center">
                    <Text fontSize="md">
                      {new Date(item.startDate).toLocaleDateString()}
                    </Text>
                  </Box>
                  <Box w={100} alignItems="center">
                    <Text fontSize="md">
                      {new Date(item.endDate).toLocaleDateString()}
                    </Text>
                  </Box>
                  <Box w={100} alignItems="center">
                    <Text fontSize="md">{item.class}</Text>
                  </Box>
                  <Box w={150} alignItems="center">
                    <Text fontSize="md">{item.teacher}</Text>
                  </Box>
                  <Box w={100} alignItems="center">
                    <Button
                      variant="solid"
                      colorScheme="primary"
                      py={1}
                      onPress={(_) => {
                        setCurrentExam(props.data.Exams[index]);
                        setShowModal(true);
                      }}
                    >
                      View
                    </Button>
                  </Box>
                </Box>
                <Divider />
              </>
            ))}
          </Box>
        </ScrollView>
      </ScrollView>
      <Center>
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          w={Dimensions.get("window").width}
        >
          <Modal.Content maxWidth={500}>
            <Modal.CloseButton />
            <Modal.Header>Exam Details</Modal.Header>
            <Modal.Body>
              <ScrollView>
                <ScrollView horizontal>
                  <Box flexDir="column">
                    <Box flexDir="row" py={2}>
                      <Box w={50} alignItems="center">
                        <Text fontSize="md" fontWeight="extrabold">
                          No.
                        </Text>
                      </Box>
                      <Box w={150} alignItems="center">
                        <Text fontSize="md" fontWeight="extrabold">
                          Start Time
                        </Text>
                      </Box>
                      <Box w={100} alignItems="center">
                        <Text fontSize="md" fontWeight="extrabold">
                          End Time
                        </Text>
                      </Box>
                      <Box w={100} alignItems="center">
                        <Text fontSize="md" fontWeight="extrabold">
                          Date
                        </Text>
                      </Box>
                      <Box w={150} alignItems="center">
                        <Text fontSize="md" fontWeight="extrabold">
                          Subject
                        </Text>
                      </Box>
                    </Box>
                    <Divider />
                    {currentExam?.exams?.map((item, index) => (
                      <>
                        <Box flexDir="row" py={2}>
                          <Box w={50} alignItems="center">
                            <Text fontSize="md">{index + 1}</Text>
                          </Box>
                          <Box w={150} alignItems="center">
                            <Text fontSize="md">{new Date(item.startTime).toLocaleTimeString()}</Text>
                          </Box>
                          <Box w={100} alignItems="center">
                            <Text fontSize="md">{new Date(item.endTime).toLocaleTimeString()}</Text>
                          </Box>
                          <Box w={100} alignItems="center">
                            <Text fontSize="md">
                              {new Date(item.date).toLocaleDateString()}
                            </Text>
                          </Box>
                          <Box w={150} alignItems="center">
                            <Text fontSize="md">{item.subject}</Text>
                          </Box>
                        </Box>
                        <Divider />
                      </>
                    ))}
                  </Box>
                </ScrollView>
              </ScrollView>
            </Modal.Body>
          </Modal.Content>
        </Modal>
      </Center>
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
    fetchExam: () => dispatch(Actions.FetchExam()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomExamTable);
