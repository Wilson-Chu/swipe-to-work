import axios from "axios";
import { useCallback, useEffect, useReducer } from "react";

export const ACTIONS = {
  SET_JOBS_DATA: "SET_JOBS_DATA",
  SHOW_MORE_DETAILS: "SHOW_MORE_DETAILS",
  CLOSE_MODAL: "CLOSE_MODAL",
  NEXT_JOB: "NEXT_JOB",
  SWIPE_RIGHT: "SWIPE_RIGHT",
  SWIPE_LEFT: "SWIPE_LEFT",
  LOADING: "LOADING",
  FINISHED_LOADING: "FINISHED_LOADING",
  CLEAR_JOBS: "CLEAR_JOBS",
  UPDATE_APPLIED: "UPDATE_APPLIED",
  RESET_JOB_INDEX: "RESER_JOB_INDEX",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_JOBS_DATA:
      return { ...state, jobs: action.value };

    case ACTIONS.SHOW_MORE_DETAILS:
      return { ...state, modal: true };

    case ACTIONS.CLOSE_MODAL:
      return { ...state, modal: false };

    case ACTIONS.NEXT_JOB:
      return { ...state, jobIndex: state.jobIndex + 1 };

    case ACTIONS.SWIPE_RIGHT:
      return { ...state, isJobSaved: action.value };

    case ACTIONS.SWIPE_LEFT:
      return { ...state, isJobPassed: action.value };

    case ACTIONS.LOADING:
      return { ...state, loading: true };

    case ACTIONS.FINISHED_LOADING:
      return { ...state, loading: false };

    case ACTIONS.CLEAR_JOBS:
      return { ...state, jobs: [] };

    // case ACTIONS.UPDATE_APPLIED:
    //   const { jobId } = action.payload;
    //   const applied = state.appliedJobs.includes(jobId);
    //   // Either adds or removes specific jobId to the appliedJobs array based on click
    //   if (!applied) {
    //     return {
    //       ...state,
    //       appliedJobs: [...state.appliedJobs, jobId]
    //     };
    //   } else {
    //     return {
    //       ...state,
    //       appliedJobs: state.appliedJobs.filter(appliedJobId => appliedJobId !== jobId)
    //     };
    //   };

    case ACTIONS.UPDATE_APPLIED:
      const { jobId, toggle } = action.payload;
      const applied = state.appliedJobs.includes(jobId);

      if (toggle) {
        // If toggle is true, either adds or removes jobId
        return {
          ...state,
          appliedJobs: applied
            ? state.appliedJobs.filter((appliedJobId) => appliedJobId !== jobId)
            : [...state.appliedJobs, jobId],
        };
      } else {
        // If toggle is false (clicking on Apply To Job), jobId should stay in appliedJobs but not be added multiple times
        if (!applied) {
          return {
            ...state,
            appliedJobs: [...state.appliedJobs, jobId],
          };
        } else {
          // jobId is already present, no need to add it again
          return state;
        }
      }

    case ACTIONS.RESET_JOB_INDEX:
      return { ...state, jobIndex: 0 };

    default:
      throw new Error(`${action.type} is not recognized`);
  }
};

const initialState = {
  jobs: [],
  jobIndex: 0,
  modal: false,
  isJobSaved: false,
  isJobPassed: false,
  loading: true,
  appliedJobs: [],
};

const useApplicationData = function () {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setLoading = (loading) => {
    dispatch({ type: loading ? ACTIONS.LOADING : ACTIONS.FINISHED_LOADING });
  };

  const openModal = function () {
    dispatch({ type: ACTIONS.SHOW_MORE_DETAILS });
  };

  const closeModal = function () {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  const nextJob = function () {
    dispatch({ type: ACTIONS.NEXT_JOB });
  };

  const clearJobs = function () {
    dispatch({ type: ACTIONS.CLEAR_JOBS });
  };

  const resetJobIndex = function () {
    dispatch({ type: ACTIONS.RESET_JOB_INDEX });
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

  const swipeRight = function () {
    dispatch({ type: ACTIONS.SWIPE_RIGHT, value: true });
  };

  const swipeLeft = function () {
    dispatch({ type: ACTIONS.SWIPE_LEFT, value: true });
  };

  const updateAppliedJobs = (jobId, toggle) => {
    dispatch({ type: ACTIONS.UPDATE_APPLIED, payload: { jobId, toggle } });
  };

  const fetchItems = useCallback(() => {
    setLoading(true);
    clearJobs();
    resetJobIndex();

    axios
      .get("/api/jobs")
      .then((res) => {
        console.log("testing - API call here");
        dispatch({ type: ACTIONS.SET_JOBS_DATA, value: res.data });
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
      });
  });

  // Fetch data on first render
  useEffect(() => {
    fetchItems();
  }, []);

  return {
    state,
    fetchItems,
    openModal,
    closeModal,
    nextJob,
    swipeLeft,
    swipeRight,
    setLoading,
    updateAppliedJobs,
  };
};

export default useApplicationData;
