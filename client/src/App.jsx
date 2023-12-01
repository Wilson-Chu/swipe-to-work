import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useApplicationData from "./hooks/useApplicationData";
import "./App.scss";
import Home from "./pages/Home";
import Preferences from "./pages/Preferences";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";
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
  } = useApplicationData();
  
  // const [isJobSaved, setIsJobSaved] = useState(false);
  // const [isJobPassed, setIsJobPassed] = useState(false);


  return (
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
          <Route
            path="/preferences"
            element={<Preferences jobs={state.jobs} fetchItems={fetchItems} />}
          />
          <Route path="/saved" element={<Saved />} />
        </Routes>
      </Router>
    </div>
  );
}
