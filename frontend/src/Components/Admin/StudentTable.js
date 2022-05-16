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
import VisibilityIcon from "@material-ui/icons/Visibility";

export default function CustomStudentTableComponents(props) {
  const [Students, setStudents] = useState([
    {
      studentID: "19ce077",
      class: 4,
      studentName: "Mendapara Drimil",
      fatherName: "Mendapara Kiritbhai",
      Address: "Rajkot , Gujarat",
      phoneNumber: "9664663001",
      feesStatus: "pending",
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
              <TableCell>Student ID</TableCell>
              <TableCell>Student Name</TableCell>
              <TableCell>Fees payment</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Students.slice(page * row, page * row + row).map((item) => (
              <TableRow>
                <TableCell>{item.studentID}</TableCell>
                <TableCell>{item.studentName}</TableCell>
                <TableCell>{item.feesStatus}</TableCell>
                <TableCell>
                  <IconButton>
                    <EditIcon style={{ color: green[900] }} />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon style={{ color: red[500] }} />
                  </IconButton>
                  <IconButton>
                    <VisibilityIcon style={{ color: "blue" }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[2, 3, 5, 10]}
          count={Students.length}
          rowsPerPage={row}
          page={page}
          onChangePage={(event, newPage) => setPage(newPage)}
          onChangeRowsPerPage={(event) => setRow(event.target.value)}
        />
      </TableContainer>
    </>
  );
}
