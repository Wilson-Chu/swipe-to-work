// AppliedJobsContext.js
import { createContext, useContext, useState } from "react";
import useApplicationData from "../hooks/useApplicationData";

const AppliedJobsContext = createContext();

export const AppliedJobsProvider = ({ children }) => {
  const [contextInitialized, setContextInitialized] = useState(false);
  const { state, updateAppliedJobs } = useApplicationData();

  // const appliedJobs = state.appliedJobs;
  const { appliedJobs } = state;

  if (!contextInitialized) {
    setContextInitialized(true);
  }

  const contextValue = {
    appliedJobs,
    updateAppliedJobs,
  };

  return (
    <AppliedJobsContext.Provider value={contextValue}>
      {children}
    </AppliedJobsContext.Provider>
  );
};

export const useAppliedJobsContext = () => {
  return useContext(AppliedJobsContext);
};
