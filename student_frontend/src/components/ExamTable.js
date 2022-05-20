import React from "react";

import {
  Box,
  Button,
  Divider,
  ScrollView,
  Text,
  Modal,
  Center,
} from "native-base";
import { Dimensions } from "react-native";

export default function CustomExamTable(props) {
  const [showModal, setShowModal] = React.useState(false);
  const [currentExam, setCurrentExam] = React.useState({});
  const [showResultModal, setShowResultModal] = React.useState(false);
  const [currentExamResult, setCurrentExamResult] = React.useState({});

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
            {props.exam.map((item, index) => (
              <>
                <Box flexDir="row" px={2} py={2}>
                  <Box w={50} alignItems="center">
                    <Text fontSize="md">{index + 1}</Text>
                  </Box>
                  <Box w={150} alignItems="center">
                    <Text fontSize="md">
                      {item.startDate.toLocaleDateString()}
                    </Text>
                  </Box>
                  <Box w={100} alignItems="center">
                    <Text fontSize="md">
                      {item.endDate.toLocaleDateString()}
                    </Text>
                  </Box>
                  <Box w={100} alignItems="center">
                    <Text fontSize="md">{item.class}</Text>
                  </Box>
                  <Box w={150} alignItems="center">
                    <Text fontSize="md">{item.prepareBy}</Text>
                  </Box>
                  <Box w={100} alignItems="center">
                    <Button
                      variant="solid"
                      colorScheme="primary"
                      py={1}
                      onPress={(_) => {
                        setCurrentExam(props.exam[index]);
                        setShowModal(true);
                      }}
                    >
                      View Exam
                    </Button>
                    <Button
                      variant="solid"
                      colorScheme="primary"
                      py={1}
                      ml={2}
                      onPress={(_) => {
                        setCurrentExam(props.exam[index]);
                        setShowResultModal(true);
                      }}
                    >
                      View Result
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
          onClose={() => {
            setShowModal(false);
            setCurrentExam({});
          }}
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
                            <Text fontSize="md">{`${item.startTime.getHours()}:${item.startTime.getMinutes()}`}</Text>
                          </Box>
                          <Box w={100} alignItems="center">
                            <Text fontSize="md">{`${item.endTime.getHours()}:${item.endTime.getMinutes()}`}</Text>
                          </Box>
                          <Box w={100} alignItems="center">
                            <Text fontSize="md">
                              {item.date.toLocaleDateString()}
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
        <Modal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
            setCurrentExam({});
          }}
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
                          Subject
                        </Text>
                      </Box>
                      <Box w={150} alignItems="center">
                        <Text fontSize="md" fontWeight="extrabold">
                          Total Score
                        </Text>
                      </Box>
                      <Box w={150} alignItems="center">
                        <Text fontSize="md" fontWeight="extrabold">
                          Score
                        </Text>
                      </Box>
                    </Box>
                    <Divider />
                    {currentExamResult?.exams?.map((item, index) => (
                      <>
                        <Box flexDir="row" py={2}>
                          <Box w={50} alignItems="center">
                            <Text fontSize="md">{index + 1}</Text>
                          </Box>
                          <Box w={150} alignItems="center">
                            <Text fontSize="md">{item.subject}</Text>
                          </Box>
                          <Box w={150} alignItems="center">
                            <Text fontSize="md">{item.subject}</Text>
                          </Box>
                          <Box w={150} alignItems="center">
                            <Text fontSize="md">{item.totalScore}</Text>
                          </Box>
                          <Box w={150} alignItems="center">
                            <Text fontSize="md">{item.score}</Text>
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
