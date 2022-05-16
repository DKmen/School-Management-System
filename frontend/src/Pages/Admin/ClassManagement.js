import { Button, Grid, Box } from "@material-ui/core";
import CustomDrawerComponents from "../../Components/Admin/Drawer";

import AddIcon from "@material-ui/icons/Add";
import CustomClassTableComponents from "../../Components/Admin/ClassTable";

export default function ClassManagementPage(props) {
  return (
    <>
      <CustomDrawerComponents>
        <Box mx={8} my={6}>
          <Grid container spacing={4}>
            <Grid item md={2} sm={8} lg={2} xs={12}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                fullWidth
              >
                Add Class
              </Button>
            </Grid>
            <Grid item md={12} sm={12} lg={12} xs={12}>
              <CustomClassTableComponents />
            </Grid>
          </Grid>
        </Box>
      </CustomDrawerComponents>
    </>
  );
}
