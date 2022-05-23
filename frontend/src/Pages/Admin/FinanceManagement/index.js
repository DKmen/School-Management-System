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
import FinanceFormPropsTextFields from "../../../Components/Admin/FinanceForm";
export default function FinanceManagementPage(props) {
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
          <FinanceFormPropsTextFields/>
          {/* <Grid container spacing={4} justifyContent="space-between">
            <Grid item sm={12} md={4} lg={4} xl={4}>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                startIcon={<AddIcon />}
                fullWidth
              >
                Add Expence & Income
              </Button>
            </Grid>
            <Grid item sm={12} md={12} lg={12} xl={12}>
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                spacing={4}
              >
                <Grid item sm={6} md={6} lg={6} xl={6}>
                  <TextField
                    type="date"
                    variant="outlined"
                    margin="normal"
                    label="From"
                    fullWidth
                  />
                </Grid>
                <Grid item sm={6} md={6} lg={6} xl={6}>
                  <TextField
                    type="date"
                    variant="outlined"
                    margin="normal"
                    label="To"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={12} md={6} lg={6} xl={6}>
              <Paper component={Box} maxHeight={500} p={4} overflow={"auto"}>
                <Typography variant="h6">Income</Typography>
                <List>
                  {Finance.map((item) =>
                    item.isExpance ? (
                      <></>
                    ) : (
                      <>
                        <ListItem>
                          <Grid container>
                            <Grid item sm={12} md={12} xl={12}>
                              <Typography variant="button" display="block">
                                {item.date}
                              </Typography>
                            </Grid>
                            <Grid item sm={12} md={12} xl={12}>
                              <ListItemText
                                primary={item.description}
                                secondary={item.amount}
                              />
                            </Grid>
                          </Grid>
                        </ListItem>
                        <Divider />
                      </>
                    )
                  )}
                </List>
              </Paper>
            </Grid>
            <Grid item sm={12} md={6} lg={6} xl={6}>
              <Paper component={Box} maxHeight={500} p={4} overflow={"auto"}>
                <Typography variant="h6">Expances</Typography>
                <List>
                  {Finance.map((item) =>
                    item.isExpance ? (
                      <>
                        <ListItem>
                          <Grid container>
                            <Grid item sm={12} md={12} xl={12}>
                              <Typography variant="button" display="block">
                                {item.date}
                              </Typography>
                            </Grid>
                            <Grid item sm={12} md={12} xl={12}>
                              <ListItemText
                                primary={item.description}
                                secondary={item.amount}
                              />
                            </Grid>
                          </Grid>
                        </ListItem>
                        <Divider />
                      </>
                    ) : (
                      <></>
                    )
                  )}
                </List>
              </Paper>
            </Grid>
            <Grid item sm={12} md={12} lg={12} xl={12}>
              <Typography variant="h6">{`Total Income is 3000`}</Typography>
              <Typography variant="h6">{`Total Expance is 5000`}</Typography>
              <Typography variant="h6">{`Over All Income is -2000`}</Typography>
            </Grid>
          </Grid> */}
        </Box>
      </CustomDrawerComponents>
    </>
  );
}
