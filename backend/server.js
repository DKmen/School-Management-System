const express = require('express');
const app = express();
require("dotenv").config();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL
const authRouter = require('./routes/auth.router');
const studentRouter = require('./routes/student.router');
const teacherRouter = require('./routes/teacher.router');
const classRouter = require('./routes/class.router');
const subjectRouter = require('./routes/subject.router');
const noticeRouter = require('./routes/notice.router');
const timeTableRouter = require('./routes/timeTable.router');
const slotRouter = require('./routes/slot.router');
const expenseRouter = require('./routes/expense.router');
const examRouter = require('./routes/exam.router');
const materialRouter = require('./routes/material.router');

mongoose.connect(MONGO_URL);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/students", studentRouter);
app.use("/api/v1/teachers", teacherRouter);
app.use("/api/v1/classes", classRouter);
app.use("/api/v1/subjects", subjectRouter);
app.use("/api/v1/notices", noticeRouter);
app.use("/api/v1/timetables", timeTableRouter);
app.use("/api/v1/slots", slotRouter);
app.use("/api/v1/expenses", expenseRouter);
app.use("/api/v1/exams", examRouter);
app.use("/api/v1/materials", materialRouter);

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});