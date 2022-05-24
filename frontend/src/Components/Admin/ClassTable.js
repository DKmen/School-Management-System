import React, { useState } from "react";

import {
  Table,
  TableContainer,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TablePagination,
  Paper,
  IconButton,
} from "@material-ui/core";

import { green, red } from "@material-ui/core/colors";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from '@material-ui/icons/Delete';

export default function CustomClassTableComponents(props) {
  const [Classes, setClasses] = useState([
    {
      std: 2,
      totalStudent: 310,
      totalTeacher: 10,
      feesPerStudent: 3100,
      totalSubject: 5,
    },
  ]);
  const [page, setPage] = useState(0);
  const [row, setRow] = useState(2);

  console.log(props.classes);

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>STD.</TableCell>
              <TableCell>Total Students</TableCell>
              <TableCell>Total Teacher</TableCell>
              <TableCell>Fees Per Students</TableCell>
              <TableCell>Total Subjects</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.classes.slice(page * row, page * row + row).map((item) => (
              <TableRow>
                <TableCell>{item.STD}</TableCell>
                <TableCell>{item.totalStudents}</TableCell>
                <TableCell>{item.totalTeachers}</TableCell>
                <TableCell>{item.Fees_Per_Student}</TableCell>
                <TableCell>{item.totalSubjects}</TableCell>
                <TableCell>
                  <IconButton>
                    <EditIcon style={{ color: green[900] }} />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon style={{ color: red[500] }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[2, 3, 5, 10]}
          count={Classes.length}
          rowsPerPage={row}
          page={page}
          onChangePage={(event, newPage) => setPage(newPage)}
          onChangeRowsPerPage={(event) => setRow(event.target.value)}
        />
      </TableContainer>
    </>
  );
}
