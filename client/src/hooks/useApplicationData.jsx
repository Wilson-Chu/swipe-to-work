import axios from "axios";
import { useCallback, useEffect, useReducer } from "react";

export const ACTIONS = {
  SET_JOBS_DATA: "SET_JOBS_DATA",
  SHOW_MORE_DETAILS: "SHOW_MORE_DETAILS",
  CLOSE_MODAL: "CLOSE_MODAL",
  NEXT_JOB: "NEXT_JOB"
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_JOBS_DATA:
      return {...state, jobs: action.value}

    case ACTIONS.SHOW_MORE_DETAILS:
      return {...state, modal: action.value}

    case ACTIONS.CLOSE_MODAL:
      return {...state, modal: false}

    case ACTIONS.NEXT_JOB:
      return {...state, jobIndex: state.jobIndex + 1}

    default:
      throw new Error(`${action.type} is not recognized`)
  }
}

const initialState = {
  jobs: [],
  jobIndex: 0,
  modal: false
}

const useApplicationData = function () {

  const [state, dispatch] = useReducer(reducer, initialState)


  const openModal = function () {
   dispatch ({type: ACTIONS.SHOW_MORE_DETAILS, value: true});
  };

  const closeModal = function () {
    dispatch ({type: ACTIONS.CLOSE_MODAL});
  };

  const nextJob = function () {
    dispatch({type: ACTIONS.NEXT_JOB});
  };

  const fetchItems = useCallback(() => {
   
    axios
      .get("/api/jobs")
      .then((res) => {
        dispatch({type: ACTIONS.SET_JOBS_DATA, value: res.data});
      })
      .catch((error) => console.log(error.message));
  });

  // Fetch data on first render
  useEffect(() => {
    fetchItems();
  }, []);


  return { state, fetchItems, openModal, closeModal, nextJob };
};

export default useApplicationData;
