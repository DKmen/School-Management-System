import React, { useEffect } from "react";
import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Typography,
  ListItem,
  ListItemText,
  makeStyles
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  link: {
    textDecoration: "none",
    color: "black",
    "&:hover": {
      textDecoration: "none",
      color: "black",
    }
  },
}));

export default function CustomDrawerComponents(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const DrawerNavigatorText = [
    {name : "Notice Board", path : "/"},
    {name : "Class Management", path : "/classes"},
    {name : "Teacher Management", path : "/teachers"},
    {name : "Fees Payment", path : "/"},
    {name : "Student Management", path : "/students"},
    {name : "Subject Management", path : "/subjects"},
    {name : "Make Time Table", path : "/"},
    {name : "Manage Expences", path : "/"},
    {name : "Exam Management", path : "/"},
  ];

  useEffect(() => {
    if (window.localStorage.getItem("token") === null) {
      navigate("/admin/login", {replace : true});
    }
  },[])

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              School Name
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.toolbar} />
          <List>
            {DrawerNavigatorText.map((text) => (
              <ListItem button key={text.name}>
                <Link to={text.path} className={classes.link}><ListItemText primary={text.name} /></Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main className={classes.content}>
          <Toolbar />
          {props.children}
        </main>
      </div>
    );
  }