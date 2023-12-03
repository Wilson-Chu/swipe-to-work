// ApplicationDataContext.js
import { createContext, useContext, useState } from "react";
import useApplicationData from "../hooks/useApplicationData";

const ApplicationDataContext = createContext();

export const ApplicationDataProvider = ({ children }) => {
  const [contextInitialized, setContextInitialized] = useState(false);
  const {
    state,
    openModal,
    closeModal,
    nextJob,
    fetchItems,
    swipeLeft,
    swipeRight,
    setLoading,
    updateAppliedJobs,
  } = useApplicationData();

  // const appliedJobs = state.appliedJobs;
  // const { appliedJobs } = state;

  // define a state here
  const [userId, setUserId] = useState("");
  

  if (!contextInitialized) {
    setContextInitialized(true);
  }

  const contextValue = {
    userId,
    setUserId,
    state,
    openModal,
    closeModal,
    nextJob,
    fetchItems,
    swipeLeft,
    swipeRight,
    setLoading,
    updateAppliedJobs,
  };

  return (
    <ApplicationDataContext.Provider value={contextValue}>
      {children}
    </ApplicationDataContext.Provider>
  );
};

export const useApplicationDataContext = () => {
  return useContext(ApplicationDataContext);
};
