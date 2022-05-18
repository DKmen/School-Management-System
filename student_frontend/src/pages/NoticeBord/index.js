import React from "react";

import { Box, Button, ScrollView, Text } from "native-base";

import CustormAppbar from "../../components/Appbar";

import CustomNoticeData from "../../components/Notice";
import CustomNoticeBordForm from "../../components/NoticeForm";

export default function NoticeBordPage() {
  const [openNoticeForm, setOpenNoticeForm] = React.useState(false);
  return (
    <Box safeArea>
      <CustormAppbar />
      <Box p={2}>
        <ScrollView>
          <Button
            variant="outline"
            colorScheme="primary"
            mb={2}
            onPress={(_) => setOpenNoticeForm(true)}
          >
            Add Notice
          </Button>
          <Box px={2} height={550}>
            <ScrollView>
              <CustomNoticeData
                date="12-02-2022"
                details="Ex sunt in aliquip quis proident nostrud officia fugiat sunt
              consectetur sit aliquip do consectetur. Exercitation enim amet"
                source="Admin"
              />
            </ScrollView>
          </Box>
        </ScrollView>
      </Box>
      <CustomNoticeBordForm
        formOpen={setOpenNoticeForm}
        isOpen={openNoticeForm}
      />
    </Box>
  );
}
