import axios from "axios";
import { useCallback, useEffect, useReducer } from "react";

export const ACTIONS = {
  SET_JOBS_DATA: "SET_JOBS_DATA",
  SHOW_MORE_DETAILS: "SHOW_MORE_DETAILS",
  CLOSE_MODAL: "CLOSE_MODAL",
  NEXT_JOB: "NEXT_JOB",
  SWIPE_RIGHT: "SWIPE_RIGHT",
  SWIPE_LEFT: "SWIPE_LEFT"
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_JOBS_DATA:
      return { ...state, jobs: action.value }

    case ACTIONS.SHOW_MORE_DETAILS:
      return { ...state, modal: action.value }

    case ACTIONS.CLOSE_MODAL:
      return { ...state, modal: false }

    case ACTIONS.NEXT_JOB:
      return { ...state, jobIndex: state.jobIndex + 1 };
    
    case ACTIONS.SWIPE_RIGHT:
      return {...state, isJobSaved: action.value};

    case ACTIONS.SWIPE_LEFT:
      return {...state, isJobPassed: action.value};

    default:
      throw new Error(`${action.type} is not recognized`)
  }
}

const initialState = {
  jobs: [],
  jobIndex: 0,
  modal: false,
  isJobSaved: false,
  isJobPassed: false
};

const useApplicationData = function () {

  const [state, dispatch] = useReducer(reducer, initialState)


  const openModal = function () {
    dispatch({ type: ACTIONS.SHOW_MORE_DETAILS, value: true });
  };

  const closeModal = function () {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  const nextJob = function () {
    dispatch({ type: ACTIONS.NEXT_JOB });
  };

  useEffect(() => {
    // execute only when isJobSaved or isJobPassed is true -> allow animation to happen again
    if (state.isJobSaved || state.isJobPassed) {
      setTimeout(() => {
        dispatch({ type: ACTIONS.SWIPE_RIGHT, value: false });
        dispatch({ type: ACTIONS.SWIPE_LEFT, value: false });
      }, 1000);
    }
  }, [state.isJobSaved, state.isJobPassed]);

  const swipeRight = function() {
    dispatch({type: ACTIONS.SWIPE_RIGHT, value: true});
  };

  const swipeLeft = function() {
    dispatch({type: ACTIONS.SWIPE_LEFT, value: true});
  }

  const fetchItems = useCallback(() => {

    axios
      .get("/api/jobs")
      .then((res) => {
        console.log("test");
        dispatch({ type: ACTIONS.SET_JOBS_DATA, value: res.data });
      })
      .catch((error) => console.log(error.message));
  });

  // Fetch data on first render
  useEffect(() => {
    fetchItems();
  }, []);


  return { state, fetchItems, openModal, closeModal, nextJob, swipeLeft, swipeRight };
};

export default useApplicationData;