import React from "react";

import { Grid, Box } from "@material-ui/core";
import CustomDrawerComponents from "../../../Components/Admin/Drawer";

import CustomSubjectTableComponents from "../../../Components/Admin/SubjectTable";

export default function SubjectManagementPage(props) {
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
            <Grid item md={12} sm={12} lg={12} xs={12}>
              <CustomSubjectTableComponents />
            </Grid>
          </Grid>
        </Box>
      </CustomDrawerComponents>
    </>
  );
}
