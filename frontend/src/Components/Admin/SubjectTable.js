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
import DeleteIcon from "@material-ui/icons/Delete";

export default function CustomSubjectTableComponents(props) {
  const [Subject, setSubject] = useState([
    {
      subjectName: "Mathematic",
      teachers: ["Martin Parmar", "Ravi patel", "jinesh modi"],
      class: [3, 4, 6, 7],
    },
  ]);
  const [page, setPage] = useState(0);
  const [row, setRow] = useState(2);

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Subject Name</TableCell>
              <TableCell>Teachers</TableCell>
              <TableCell>Class</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Subject.slice(page * row, page * row + row).map((item) => (
              <TableRow>
                <TableCell>{item.subjectName}</TableCell>
                <TableCell>
                  {item.teachers.reduce(
                    (previousElement, currentElement) =>
                      previousElement + " , " + currentElement
                  )}
                </TableCell>
                <TableCell>
                  {item.class.reduce(
                    (previousElement, currentElement) =>
                      previousElement + " , " + currentElement
                  )}
                </TableCell>
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
          count={Subject.length}
          rowsPerPage={row}
          page={page}
          onChangePage={(event, newPage) => setPage(newPage)}
          onChangeRowsPerPage={(event) => setRow(event.target.value)}
        />
      </TableContainer>
    </>
  );
}
