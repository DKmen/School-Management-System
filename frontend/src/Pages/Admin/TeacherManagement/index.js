import { Button, Grid, Box } from "@material-ui/core";
import CustomDrawerComponents from "../../../Components/Admin/Drawer";

import AddIcon from "@material-ui/icons/Add";
import CustomTeacherTableComponents from "../../../Components/Admin/TeacherTable";

export default function TeacherManagementPage(props) {
  return (
    <>
      <CustomDrawerComponents>
        <Box mx={2} my={4}>
          <Grid container spacing={4}>
            <Grid item md={2} sm={8} lg={2} xs={12}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                fullWidth
              >
                Add Teacher
              </Button>
            </Grid>
            <Grid item md={12} sm={12} lg={12} xs={12}>
              <CustomTeacherTableComponents />
            </Grid>
          </Grid>
        </Box>
      </CustomDrawerComponents>
    </>
  );
}
