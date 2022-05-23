import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AddIcon from "@material-ui/icons/Add";
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import {
//   KeyboardDatePicker,
// } from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  // formControl: {
  //   margin: theme.spacing(1),
  //   minWidth: 120,
  //   maxWidth: 300,
  // },
  // noLabel: {
  //   marginTop: theme.spacing(3),
  // },
}));
export default function FinanceFormPropsTextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: ''
  });
  const handleChangeamount = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  // const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };
  
  return (
    <form className={classes.root} noValidate autoComplete="off">
      {/* <div> */}
      <FormControl fullWidth className={classes.margin} variant="outlined" style={{marginLeft:'7px'}}>
        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={values.amount}
          onChange={handleChangeamount('amount')}
          startAdornment={<InputAdornment position="start">₹</InputAdornment>}
          labelWidth={60}
        />
      </FormControl>
      <TextField
        style={{ width: '100%' }}
        required
        id="outlined-multiline-static"
        label="Description"
        multiline
        rows={4}
        defaultValue="Default Value"
        variant="outlined"
      />
      <TextField
      style={{ width: '100%' }}
        type="date"
        variant="outlined"
        margin="normal"
        label="Date"
        fullWidth
      />
        <div style={{display:'flex',marginLeft:'9px'}}>
        <h2>Income</h2>
        <FormControlLabel
          style={{margin:"0px 3px 0px 0px"}}
          control={<Switch color="primary" />}
          label=""
          labelPlacement="start"
        />
        <h2>Expence</h2>

        </div>
      <div style={{ margin: "20px auto 0px auto", width: "60%" }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          fullWidth
        >
          Add Finance
        </Button>
      </div>
    </form>
  );
}
