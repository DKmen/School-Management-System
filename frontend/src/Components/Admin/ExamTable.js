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

export default function CustomExamTableComponents(props) {
  const [Exams, setExams] = useState([
    {
      startDate: "12-03-2022",
      endDate: "12-03-2022",
      class: 4,
      scheduleBy: "Martin Parmar",
      exams: [{}],
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
              <TableCell>No.</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Related Class</TableCell>
              <TableCell>Schedule By</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Exams.slice(page * row, page * row + row).map((item, index) => (
              <TableRow>
                <TableCell>{index+1}</TableCell>
                <TableCell>{item.startDate}</TableCell>
                <TableCell>{item.endDate}</TableCell>
                <TableCell>{item.class}</TableCell>
                <TableCell>{item.scheduleBy}</TableCell>
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
          count={Exams.length}
          rowsPerPage={row}
          page={page}
          onChangePage={(event, newPage) => setPage(newPage)}
          onChangeRowsPerPage={(event) => setRow(event.target.value)}
        />
      </TableContainer>
    </>
  );
}
