import React, { useState } from "react";

import {
  Grid,
  Box,
  TextField,
  List,
  ListItem,
  Paper,
  ListItemText,
  Button,
  Typography,
  Divider,
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";

import CustomDrawerComponents from "../../../Components/Admin/Drawer";
import CustomExamTableComponents from "../../../Components/Admin/ExamTable";

export default function ExamManagementPage(props) {
  const [Finance, setFinance] = useState([
    {
      date: "12-02-2022",
      description: "Hi this is for purchase for school sports accerices",
      isExpance: true,
      amount: 30000,
    },
    {
      date: "12-02-2022",
      description: "Hi this is for purchase for school sports accerices",
      isExpance: true,
      amount: 30000,
    },
    {
      date: "12-02-2022",
      description: "Hi this is for purchase for school sports accerices",
      isExpance: false,
      amount: 30000,
    },
    {
      date: "12-02-2022",
      description: "Hi this is for purchase for school sports accerices",
      isExpance: true,
      amount: 30000,
    },
    {
      date: "12-02-2022",
      description: "Hi this is for purchase for school sports accerices",
      isExpance: false,
      amount: 30000,
    },
    {
      date: "12-02-2022",
      description: "Hi this is for purchase for school sports accerices",
      isExpance: true,
      amount: 30000,
    },
  ]);

  return (
    <>
      <CustomDrawerComponents>
        <Box mx={2} my={4}>
          <Grid container spacing={4} justifyContent="space-between">
            <Grid item sm={12} md={4} lg={4} xl={4}>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                startIcon={<AddIcon />}
                fullWidth
              >
                Schedule Exam
              </Button>
            </Grid>
            <Grid item md={12} sm={12} lg={12} xs={12}>
              <CustomExamTableComponents />
            </Grid>
          </Grid>
        </Box>
      </CustomDrawerComponents>
    </>
  );
}
