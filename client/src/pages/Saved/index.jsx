import React from "react";
import "./saved.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Saved(props) {
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
          <h3>Job Title, Company Name</h3>
        </div>
        <div className="bottom-saved-box">
          <span>Review Posting</span>
          <span>Apply To Job</span>
        </div>
      </section>
    </>
  );
}

export default Saved;
