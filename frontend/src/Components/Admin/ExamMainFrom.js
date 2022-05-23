import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from "@material-ui/icons/Add";
import SaveIcon from '@material-ui/icons/Save';
import ExamTimeTableComponents from "./Examtimetable";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));
export default function ExamFormPropsTextFields() {
    const [classe, setClass] = React.useState('');
    const classes = useStyles();
    const handleChange = (event) => {
        setClass(event.target.value);
    };
    return (
        <>
        <form className={classes.root} noValidate autoComplete="off">
            {/* <div> */}
            <FormControl variant="outlined" className={classes.formControl} style={{ width: '100%' }}>
                <InputLabel id="demo-simple-select-outlined-label">Class</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={classe}
                    onChange={handleChange}
                    label="Class"
                >
                    <MenuItem value={"class1_A"}>Class1_A</MenuItem>
                    <MenuItem value={"class1_B"}>class1_B</MenuItem>
                    <MenuItem value={"class2_A"}>class2_A</MenuItem>
                    <MenuItem value={"class2_B"}>class2_B</MenuItem>
                    <MenuItem value={"class3_A"}>class3_A</MenuItem>
                </Select>
            </FormControl>
            <TextField
                style={{ width: '100%' }}
                type="date"
                variant="outlined"
                margin="normal"
                label="Start Date"
                fullWidth
            />
            <TextField
                style={{ width: '100%' }}
                type="date"
                variant="outlined"
                margin="normal"
                label="End Date"
                fullWidth
            />
            <div style={{ margin: "20px auto 20px auto", width: "60%" }}>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    fullWidth
                >
                    Add Exam
                </Button>
            </div>
        </form>
        <ExamTimeTableComponents/>
        <div style={{ margin: "20px auto 20px auto", width: "60%" }}>
            <Button
                variant="contained"
                color="primary"
                startIcon={<SaveIcon />}
                fullWidth
            >
                Save
            </Button>
        </div>
        </>
    );
}
