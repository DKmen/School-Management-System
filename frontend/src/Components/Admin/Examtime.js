import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button'
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function ExamtimeMaterialUIPickers() {
    const classes = useStyles();
    const [subject, setSubject] = React.useState('');
    const handleChange = (event) => {
        setSubject(event.target.value);
    };
    return (
        <form className={classes.root} noValidate autoComplete="off">
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <TextField
                style={{width:'100%'}}
                id="time"
                label="Start Time"
                type="time"
                defaultValue="07:30"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    step: 300, // 5 min
                }}
            />
            <TextField
            style={{width:'100%'}}
                id="time"
                label="End Time"
                type="time"
                defaultValue="07:30"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    step: 300, // 5 min
                }}
            />

            <TextField
            style={{width:'100%'}}
                id="date"
                label="Exam Date"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </div>
            <FormControl variant="outlined" className={classes.formControl} style={{ width: '100%' }}>
                <InputLabel id="demo-simple-select-outlined-label">Subject</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={subject}
                    onChange={handleChange}
                    label="Subject"
                >
                    <MenuItem value={"class1_A"}>Is</MenuItem>
                    <MenuItem value={"class1_B"}>Ai</MenuItem>
                    <MenuItem value={"class2_A"}>Dip</MenuItem>
                    <MenuItem value={"class2_B"}>Toc</MenuItem>
                    <MenuItem value={"class3_A"}>soc</MenuItem>
                </Select>
            </FormControl>
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
    );
}