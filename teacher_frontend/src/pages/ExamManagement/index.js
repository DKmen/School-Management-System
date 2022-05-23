import React from "react";

import { Box, Button } from "native-base";
import { ScrollView, RefreshControl } from "react-native";
import { connect } from "react-redux";

import * as Actions from "../../hooks/action";

import CustomExamTable from "../../components/ExamTable";
import CustomExamForm from "../../components/ExamForm";

function ExamManagementPage(props) {
  const [openExamForm, setOpenExamForm] = React.useState(false);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={props.data.Loading}
          onRefresh={() => props.fetchExam()}
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
            <CustomExamTable />
          </ScrollView>
          <CustomExamForm
            formOpen={setOpenExamForm}
            isOpen={openExamForm}
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
    addExam: () => dispatch(Actions.CreateExam(data)),
    fetchExam: () => dispatch(Actions.FetchExam())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExamManagementPage);