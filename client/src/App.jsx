import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useApplicationData from "./hooks/useApplicationData";
import "./App.scss";
import Home from "./pages/Home";
import Preferences from "./pages/Preferences";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { faCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas, faCheck, faCircleXmark);


export default function App() {

  // const {state, openModal, closeModal, nextJob, fetchItems} = useApplicationData();
  
  // just for layout testing:
  const [jobIndex, setJobIndex] = useState(0);
  const [modal, setModal] = useState(false);

  const openModal = function () {
    setModal(true);
  };

  const closeModal = function () {
    setModal(false);
  };

  const nextJob = function () {
    setJobIndex((prev) => prev + 1);
  };

  const fetchItems = useCallback(() => {
    axios
      .get("/api/jobs")
      .then((res) => {
        setJobs(res.data);
      })
      .catch((error) => console.log(error.message));
  });

  useEffect(() => {
    console.log("job postings fetched from jsearch api");
    fetchItems();
  }, []);
  
  const state = { jobs: data.data, jobIndex, modal };
  
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
          <Route path="/preferences" element={<Preferences jobs={state.jobs} fetchItems={fetchItems}/>} />
          <Route path="/saved" element={<Saved jobs={state.jobs} jobIndex={state.jobIndex} modal={state.modal} openModal={openModal} closeModal={closeModal}/>} />

          <Route
            path="/preferences"
            element={<Preferences jobs={state.jobs} fetchItems={fetchItems} />}
          />

          <Route path="/saved" element={<Saved />} />
        </Routes>
        
        <Footer />
      </Router>
    </div>
  );
}
