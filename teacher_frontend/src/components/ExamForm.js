import React from "react";

import {
  ScrollView,
  Modal,
  Center,
  FormControl,
  Text,
  Select,
  Button,
  Divider,
  Box,
} from "native-base";
import { Dimensions } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import * as Actions from "../hooks/action";

import { connect } from "react-redux";

import { AntDesign } from "@expo/vector-icons";

function CustomExamForm(props) {
  const [startDate, setStartDate] = React.useState("");
  const [displayStartDate, setDisplayStartDate] = React.useState(false);
  const [endDate, setEndDate] = React.useState("");
  const [displayEndDate, setDisplayEndDate] = React.useState(false);
  const [examClass, setExamClass] = React.useState({});

  const [exams, setExams] = React.useState([]);
  const [displayExams, setDisplayExam] = React.useState(false);
  const [startTime, setStartTime] = React.useState("");
  const [displayStartTime, setDisplayStartTime] = React.useState(false);
  const [endTime, setEndTime] = React.useState("");
  const [displayEndTime, setDisplayEndTime] = React.useState(false);
  const [date, setDate] = React.useState("");
  const [displayDate, setDisplayDate] = React.useState(false);
  const [subject, setSubject] = React.useState("");

  React.useEffect(() => {
    props.fetchClass();
  }, []);

  return (
    <Center>
      <Modal
        isOpen={props.isOpen}
        onClose={() => {
          props.formOpen(false);
        }}
        w={Dimensions.get("window").width}
      >
        {props.data.Class.length !== 0 ? (
          <Modal.Content
            maxWidth={800}
            maxHeight={Dimensions.get("window").height * 0.8}
          >
            <ScrollView>
              <Modal.CloseButton />
              <Modal.Header>Schedule Exam</Modal.Header>
              <Modal.Body>
                <ScrollView>
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
                  <FormControl my={2}>
                    <FormControl.Label>Start Date</FormControl.Label>
                    <Button
                      variant="outline"
                      onPress={() => setDisplayStartDate(true)}
                    >
                      {startDate
                        ? `${startDate.toDateString()}`
                        : "Enter Start Date"}
                    </Button>
                    {displayStartDate ? (
                      <DateTimePicker
                        value={new Date()}
                        mode="date"
                        is24Hour={true}
                        display="default"
                        onChange={(event, selectedDate) => {
                          const currentDate = selectedDate || startDate;
                          setDisplayStartDate(false);
                          setStartDate(currentDate);
                        }}
                      />
                    ) : null}
                  </FormControl>
                  <FormControl my={2}>
                    <FormControl.Label>End Date</FormControl.Label>
                    <Button
                      variant="outline"
                      onPress={() => setDisplayEndDate(true)}
                    >
                      {endDate ? `${endDate.toDateString()}` : "Enter End Date"}
                    </Button>
                    {displayEndDate ? (
                      <DateTimePicker
                        value={new Date()}
                        mode="date"
                        is24Hour={true}
                        minimumDate={startDate}
                        display="default"
                        onChange={(event, selectedDate) => {
                          const currentDate = selectedDate || endDate;
                          setDisplayEndDate(false);
                          setEndDate(currentDate);
                        }}
                      />
                    ) : null}
                  </FormControl>
                  <FormControl my={2}>
                    <Button
                      variant="outline"
                      onPress={(_) => setDisplayExam(true)}
                    >
                      Add Exams
                    </Button>
                  </FormControl>
                </ScrollView>
                <FormControl my={2}>
                  <ScrollView>
                    <Box
                      h={150}
                      borderWidth={1}
                      borderColor="blue.400"
                      borderRadius={4}
                      py={2}
                    >
                      <CustomExamTable exam={exams} />
                    </Box>
                  </ScrollView>
                </FormControl>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  onPress={(_) => {
                    props.addExam({
                      startDate,
                      endDate,
                      classId: examClass?.Class_Id,
                      exams,
                    })
                    props.formOpen(false);
                  }}
                >
                  Save Exam
                </Button>
              </Modal.Footer>
            </ScrollView>
          </Modal.Content>
        ) : (
          <></>
        )}
      </Modal>
      <Modal
        isOpen={displayExams}
        onClose={() => {
          setDisplayExam(false);
        }}
        w={Dimensions.get("window").width}
      >
        <Modal.Content
          maxWidth={800}
          maxHeight={Dimensions.get("window").height * 0.8}
        >
          <ScrollView>
            <Modal.CloseButton />
            <Modal.Header>Enter Exam</Modal.Header>
            <Modal.Body>
              <FormControl my={2}>
                <FormControl.Label>Select Start Time</FormControl.Label>
                <Button
                  variant="outline"
                  onPress={() => setDisplayStartTime(true)}
                >
                  {startTime
                    ? `${startTime.getHours()}:${startTime.getMinutes()}`
                    : "Enter Start Time"}
                </Button>
                {displayStartTime ? (
                  <DateTimePicker
                    value={new Date()}
                    mode="time"
                    is24Hour={true}
                    minimumDate={startDate}
                    display="default"
                    onChange={(event, selectedDate) => {
                      const currentDate = selectedDate || startTime;
                      setDisplayStartTime(false);
                      setStartTime(currentDate);
                    }}
                  />
                ) : null}
              </FormControl>
              <FormControl my={2}>
                <FormControl.Label>Select End Time</FormControl.Label>
                <Button
                  variant="outline"
                  onPress={() => setDisplayEndTime(true)}
                >
                  {endTime
                    ? `${endTime.getHours()}:${endTime.getMinutes()}`
                    : "Enter End Time"}
                </Button>
                {displayEndTime ? (
                  <DateTimePicker
                    value={new Date()}
                    mode="time"
                    is24Hour={true}
                    display="default"
                    onChange={(event, selectedDate) => {
                      const currentDate = selectedDate || endTime;
                      setDisplayEndTime(false);
                      setEndTime(currentDate);
                    }}
                  />
                ) : null}
              </FormControl>
              <FormControl my={2}>
                <FormControl.Label>Select Date</FormControl.Label>
                <Button variant="outline" onPress={() => setDisplayDate(true)}>
                  {date ? `${date.toDateString()}` : "Enter Date"}
                </Button>
                {displayDate ? (
                  <DateTimePicker
                    value={new Date()}
                    mode="date"
                    is24Hour={true}
                    minimumDate={startDate}
                    maximumDate={endDate}
                    display="default"
                    onChange={(event, selectedDate) => {
                      const currentDate = selectedDate || date;
                      setDisplayDate(false);
                      setDate(currentDate);
                    }}
                  />
                ) : null}
              </FormControl>
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
            </Modal.Body>
            <Modal.Footer>
              <Button
                onPress={(_) => {
                  setExams([
                    ...exams,
                    {
                      startTime,
                      endTime,
                      date,
                      subject,
                    },
                  ]);
                  setStartTime("");
                  setEndTime("");
                  setDate("");
                  setSubject("");
                  setDisplayExam(false);
                }}
              >
                Save Exam
              </Button>
            </Modal.Footer>
          </ScrollView>
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
    addExam: (data) => dispatch(Actions.CreateExam(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomExamForm);

function CustomExamTable(props) {
  return (
    <ScrollView horizontal>
      <Box flexDir="column">
        <Box flexDir="row" py={2}>
          <Box w={10} alignItems="center">
            <Text fontSize="xs" fontWeight="extrabold">
              No.
            </Text>
          </Box>
          <Box w={100} alignItems="center">
            <Text fontSize="xs" fontWeight="extrabold">
              Start Time
            </Text>
          </Box>
          <Box w={100} alignItems="center">
            <Text fontSize="xs" fontWeight="extrabold">
              End Time
            </Text>
          </Box>
          <Box w={100} alignItems="center">
            <Text fontSize="xs" fontWeight="extrabold">
              Date
            </Text>
          </Box>
          <Box w={100} alignItems="center">
            <Text fontSize="xs" fontWeight="extrabold">
              Subject
            </Text>
          </Box>
        </Box>
        <Divider />
        {props?.exam?.map((item, index) => (
          <>
            <Box flexDir="row" py={2}>
              <Box w={10} alignItems="center">
                <Text fontSize="xs">{index + 1}</Text>
              </Box>
              <Box w={100} alignItems="center">
                <Text fontSize="xs">{`${item.startTime.getHours()}:${item.startTime.getMinutes()}`}</Text>
              </Box>
              <Box w={100} alignItems="center">
                <Text fontSize="xs">{`${item.endTime.getHours()}:${item.endTime.getMinutes()}`}</Text>
              </Box>
              <Box w={100} alignItems="center">
                <Text fontSize="xs">{item.date.toLocaleDateString()}</Text>
              </Box>
              <Box w={100} alignItems="center">
                <Text fontSize="xs">{item.subject}</Text>
              </Box>
            </Box>
            <Divider />
          </>
        ))}
      </Box>
    </ScrollView>
  );
}
