import React from "react";

import { Button, Grid, Box, Select, MenuItem } from "@material-ui/core";
import CustomDrawerComponents from "../../../Components/Admin/Drawer";

import AddIcon from "@material-ui/icons/Add";
import CustomStudentTableComponents from "../../../Components/Admin/StudentTable";

export default function StudentManagementPage(props) {
  const [selectClass, setSelectClass] = React.useState(1);
  return (
    <>
      <CustomDrawerComponents>
        <Box mx={2} my={4}>
          <Grid container spacing={4} justifyContent="space-between" alignItems="center">
            <Grid item md={2} sm={8} lg={2} xs={12}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                fullWidth
              >
                Add Student
              </Button>
            </Grid>
            <Grid item md={2} sm={8} lg={2} xs={12}>
              <Select
                onChange={(event) => setSelectClass(event.target.value)}
                value={selectClass}
                variant="outlined"
                margin="dense"
              >
                <MenuItem value={1}>Class 1</MenuItem>
                <MenuItem value={2}>Class 2</MenuItem>
                <MenuItem value={3}>Class 3</MenuItem>
              </Select>
            </Grid>
            <Grid item md={12} sm={12} lg={12} xs={12}>
              <CustomStudentTableComponents />
            </Grid>
          </Grid>
        </Box>
      </CustomDrawerComponents>
    </>
  );
}
