import { Button, Grid, Box, LinearProgress } from "@material-ui/core";
import CustomDrawerComponents from "../../../Components/Admin/Drawer";
import AddIcon from "@material-ui/icons/Add";
import CustomClassTableComponents from "../../../Components/Admin/ClassTable";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme) => ({
  root : {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  link : {
    textDecoration : "none",
    color : "white",
    "&:hover": {
      textDecoration : "none",
      color : "white",
    }
  },
}))

export default function ClassManagementPage(props) {
  
  const classes = useStyles();
  const [classList, setClassList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios({
      method : "GET",
      url : `${process.env.REACT_APP_API_URL}/classes/subjects`,
      headers : {
        "Authorization" : `Bearer ${window.localStorage.getItem('token')}`
      }
    }).then((res) => {
      if (res.data.error) {
        toast.error(res.data.message);
      } else {
        setClassList(res.data.data);
        setLoading(true);
        console.log(res.data.data);
      }
    }).catch((error) => {
      toast.error(error.response.data.error);
    });
  }, []);

  return (
    <>
    <ToastContainer />
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
                <Link to="/classes/add" className={classes.link}>Add Class</Link>
              </Button>
            </Grid>
            <Grid item md={12} sm={12} lg={12} xs={12}>
              {
                loading ? <CustomClassTableComponents classes={classList}/> : <Box className={classes.root}>
                  <LinearProgress />
                </Box>
              }
            </Grid>
          </Grid>
        </Box>
      </CustomDrawerComponents>
    </>
  );
}
