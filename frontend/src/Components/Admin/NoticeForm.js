import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import AddIcon from "@material-ui/icons/Add";

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
      chips: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      chip: {
        margin: 2,
      },
      noLabel: {
        marginTop: theme.spacing(3),
      },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const names = [
    'Class1_A',
    'Class1_B',
    'Class2_A',
    'Class2_B',
    'Class3_A',
    'Class3_B',
    'Class4_A',
    'Class4_B',
    'Class5_A',
    'Class5_B',
  ];
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
export default function NoticeFormPropsTextFields() {
    const classes = useStyles();
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    const handleChange = (event) => {
        setPersonName(event.target.value);
      };
    
      const handleChangeMultiple = (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
          if (options[i].selected) {
            value.push(options[i].value);
          }
        }
        setPersonName(value);
      };
    return (
        <form className={classes.root} noValidate autoComplete="off">
            {/* <div> */}
            <TextField
                style={{ width: '100%' }}
                required
                id="outlined-required"
                label="Notice Title"
                defaultValue="Hello World"
                variant="outlined"
            />
            <TextField
                style={{ width: '100%' }}
                required
                id="outlined-multiline-static"
                label="Notice Details"
                multiline
                rows={4}
                defaultValue="Default Value"
                variant="outlined"
            />
            <FormControl variant="outlined" className={classes.formControl} style={{ width: '100%' }}>
                <InputLabel id="demo-mutiple-chip-label">Classes</InputLabel>
                <Select
                    labelId="demo-mutiple-chip-label"
                    id="demo-mutiple-chip"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<Input id="select-multiple-chip" />}
                    renderValue={(selected) => (
                        <div className={classes.chips}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} className={classes.chip} />
                            ))}
                        </div>
                    )}
                    MenuProps={MenuProps}
                >
                    {names.map((name) => (
                        <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <div style={{margin:"20px auto 0px auto",width:"60%"}}>
            <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                fullWidth
              >
                Add Notice
              </Button>
            </div>
        </form>
    );
}
