import React from "react";

import { Box, Button } from "native-base";
import { ScrollView, RefreshControl } from "react-native";
import { connect } from "react-redux";

import * as Actions from "../../hooks/action";

import CustomNoticeData from "../../components/Notice";
import CustomNoticeBordForm from "../../components/NoticeForm";

function NoticeBordPage(props) {
  const [openNoticeForm, setOpenNoticeForm] = React.useState(false);

  React.useState(() => {
    props.fetchNotice();
    if (!props.data.Login) props.navigation.navigate("Login");
  }, []);

  const openForm = () => {
    setOpenNoticeForm(true);
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={props.data.Loading}
          onRefresh={() => props.fetchNotice()}
        />
      }
    >
      <Box>
        <Box p={2}>
          <Button
            variant="outline"
            colorScheme="primary"
            mb={2}
            onPress={openForm}
          >
            Add Notice
          </Button>
          <Box px={2} height={550}>
            <ScrollView>
              {props?.data?.Notice.map((item) => {
                return (
                  <CustomNoticeData
                    title={item.Notice_Title}
                    date={item.createdAt || `${new Date().toUTCString()}`}
                    details={item.Notice_Details}
                    source={item?.Creator_Id?.Teacher_Name || `${props.data.Teacher.Teacher_Name}`}
                  />
                );
              })}
            </ScrollView>
          </Box>
        </Box>
        <CustomNoticeBordForm
          formOpen={setOpenNoticeForm}
          isOpen={openNoticeForm}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(NoticeBordPage);
