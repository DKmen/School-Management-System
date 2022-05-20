import { combineReducers } from "redux";

import * as Actions from "../constant/ActionName";

const Student = (state = {}, action) => {
  switch (action) {
    case action.type === Actions.FETCH_STUDENT:
      return action.paylode;
    default:
      return state;
  }
};

const Exams = (state = [], action) => {
  switch (action) {
    case action.type === Actions.FETCH_EXAMS:
      return action.paylode;
    default:
      return state;
  }
};

const Notice = (state = [], action) => {
  switch (action) {
    case action.type === Actions.FETCH_NOTICE:
      return action.paylode;
    default:
      return state;
  }
};

const Notes = (state = [], action) => {
  switch (action) {
    case action.type === Actions.FETCH_CLASS_NOTES:
      return action.paylode;
    default:
      return state;
  }
};

export default combineReducers({
  Student,
  Exams,
  Notice,
  Notes,
});
