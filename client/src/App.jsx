import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useApplicationData from "./hooks/useApplicationData";
import "./App.scss";
import Home from "./pages/Home";
import Preferences from "./pages/Preferences";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import { AppliedJobsProvider } from "./providers/AppliedJobsProvider";
import { faCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas, faCheck, faCircleXmark);

export default function App() {

  const {
    state,
    openModal,
    closeModal,
    nextJob,
    fetchItems,
    swipeLeft,
    swipeRight,
    setLoading,
    updateAppliedJobs // update appliedJobs array with jobId 
  } = useApplicationData();


  /* testing only... */
  console.log(state.appliedJobs.length)
  /* end of testing */

  return (
    <AppliedJobsProvider>
      <div className="App">
        <Router>
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <Home
                  jobs={state.jobs}
                  jobIndex={state.jobIndex}
                  modal={state.modal}
                  loading={state.loading}
                  openModal={openModal}
                  closeModal={closeModal}
                  nextJob={nextJob}
                  isJobSaved={state.isJobSaved}
                  swipeRight={swipeRight}
                  isJobPassed={state.isJobPassed}
                  swipeLeft={swipeLeft}
                />
              }
            />

            {/* <Route path="/account" element={<Account />} /> */}
            <Route path="/saved" element={<Saved jobs={state.jobs} jobIndex={state.jobIndex} modal={state.modal} openModal={openModal} closeModal={closeModal} />} />
            <Route
              path="/preferences"
              element={<Preferences jobs={state.jobs} fetchItems={fetchItems} setLoading={setLoading} />}
            />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </Router>
    </div>
    </AppliedJobsProvider>
  );
}
