import React from "react";
import "./saved.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import SavedJobItem from "./SavedJobItem";

function Saved(props) {
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    axios
      .get("/api/savedJobs")
      .then((res) => {
        setSavedJobs(res.data[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h2>My Saved Jobs</h2>

      {/* <section>
        <div className="top-saved-box">
          <FontAwesomeIcon
            icon="fa-solid fa-check"
            size="xl"
            className="check-applied"
          />
          <h3>
            {savedJobs.job_title}, {savedJobs.company}
          </h3>
          <FontAwesomeIcon icon="fa-solid fa-circle-xmark" className="delete-saved"/>
        </div>
        <div className="bottom-saved-box">
          <span>Review Posting</span>
          <span>
            <a href={savedJobs.website} target="_blank" rel="noopener noreferrer">Apply To Job</a>
          </span>
        </div>
      </section> */}
      <SavedJobItem
        job_title={savedJobs.job_title}
        company={savedJobs.company}
        website={savedJobs.website}
      />
    </>
  );
}

export default Saved;
