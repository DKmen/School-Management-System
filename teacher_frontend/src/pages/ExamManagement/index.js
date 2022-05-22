import React from "react";

import { Box, Button } from "native-base";
import { ScrollView, RefreshControl } from "react-native";
import { connect } from "react-redux";

import * as Actions from "../../hooks/action";

import CustomExamTable from "../../components/ExamTable";
import CustomExamForm from "../../components/ExamForm";

function ExamManagementPage(props) {
  const [openExamForm, setOpenExamForm] = React.useState(false);
  const [Exams, setExams] = React.useState([]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={props.data.Loading}
          onRefresh={() => props.fetchNotice()}
        />
      }>
      <Box>
        <Box p={2}>
          <ScrollView>
            <Box my={2}>
              <Button
                variant="outline"
                colorScheme="primary"
                mb={2}
                onPress={(_) => setOpenExamForm(true)}
              >
                Schedule Exam
              </Button>
            </Box>
            <CustomExamTable exam={Exams} />
          </ScrollView>
          <CustomExamForm
            formOpen={setOpenExamForm}
            isOpen={openExamForm}
            addExams={setExams}
            data={Exams}
          />
        </Box>
      </Box>
    </ScrollView>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotice: () => dispatch(Actions.FetchNotice()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExamManagementPage);