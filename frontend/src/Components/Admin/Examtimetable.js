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

export default function ExamTimeTableComponents(props) {
  const [Exams, setExams] = useState([
    {
        startTime: "12:00 PM",
        endTime: "15:00 PM",
        date: "12-03-2022",
        subject: "Is",
    },
    {
        startTime: "12:00 PM",
        endTime: "15:00 PM",
        date: "13-03-2022",
        subject: "AI",
    },
    {
        startTime: "12:00 PM",
        endTime: "15:00 PM",
        date: "14-03-2022",
        subject: "Dip",
    },
    {
        startTime: "12:00 PM",
        endTime: "15:00 PM",
        date: "15-03-2022",
        subject: "Toc",
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
              <TableCell>Start Time</TableCell>
              <TableCell>End Time</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Exams.slice(page * row, page * row + row).map((item, index) => (
              <TableRow>
                <TableCell>{index+1}</TableCell>
                <TableCell>{item.startTime}</TableCell>
                <TableCell>{item.endTime}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.subject}</TableCell>
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
