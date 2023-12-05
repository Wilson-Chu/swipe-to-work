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

  if (!contextInitialized) {
    setContextInitialized(true);
  }

  const contextValue = {
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
