import React from "react";
import "./saved.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Saved(props) {
  const [savedJobs, setSavedJobs] = useState([]);
  const navigate = useNavigate();

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
      <section>
        <div className="top-saved-box">
          <FontAwesomeIcon
            icon="fa-solid fa-check"
            size="xl"
            className="check-applied"
          />
          <h3>
            {savedJobs.job_title}, {savedJobs.company}
          </h3>
          <p>X</p>
        </div>
        <div className="bottom-saved-box">
          <span>Review Posting</span>
          <span>
            <a href={savedJobs.website} target="_blank" rel="noopener noreferrer">Apply To Job</a>
          </span>
        </div>
      </section>
    </>
  );
}

export default Saved;
