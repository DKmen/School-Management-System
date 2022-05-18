import React from "react";

import {
  Grid,
  Box,
  TextField,
  List,
  ListItem,
  Paper,
  ListItemText,
  Button,
  FormControl,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import CustomDrawerComponents from "../../../Components/Admin/Drawer";

export default function FeesManagementPage(props) {
  const [Student, setStudent] = React.useState({
    studentID: "19ce077",
    class: 4,
    studentName: "Mendapara Drimil",
    fatherName: "Mendapara Kiritbhai",
    Address: "Rajkot , Gujarat",
    phoneNumber: "9664663001",
    feesStatus: "pending",
    isActive: false,
    totalFees: 31000,
    pendingFees: 2000,
  });

  return (
    <>
      <CustomDrawerComponents>
        <Box mx={2} my={4}>
          <Grid
            container
            spacing={4}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item sm={12} md={12} lg={12} xl={12}>
              <TextField
                placeholder="Enter Student ID"
                label="Student ID"
                variant="outlined"
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item sm={12} md={12} lg={12} xl={12}>
              <Paper>
                <List>
                  <ListItem>
                    <ListItemText
                      primary={`Student Name : ${Student.studentName}`}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={`Student ID : ${Student.studentID}`}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={`Student Class : ${Student.class}`}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={`Student Fees : ${Student.totalFees}`}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={`Student panding Fees : ${Student.pendingFees}`}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={`IsActive : ${Student.isActive}`} />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid item sm={12} md={12} lg={12} xl={12}>
              <Paper>
                <List>
                  <ListItem>
                    <Grid
                      container
                      alignItems="center"
                      justifyContent="space-between"
                      spacing={4}
                    >
                      <Grid item sm={8} md={10} lg={10} xl={10}>
                        <TextField
                          placeholder="Enter Fees Payment Amount"
                          label="Fees"
                          margin="dense"
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                      <Grid item sm={4} md={2} lg={2} xl={2}>
                        <Button
                          variant="outlined"
                          size="medium"
                          color="primary"
                          fullWidth
                        >
                          Enter
                        </Button>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem>
                    <FormControl>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={Student.isActive}
                            color="primary"
                            onChange={(_) =>
                              setStudent({
                                ...Student,
                                isActive: !Student.isActive,
                              })
                            }
                          />
                        }
                        label="Active Student to login"
                      />
                    </FormControl>
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </CustomDrawerComponents>
    </>
  );
}
