import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SavedJobItem({ job_title, company, website }) {
  return (
    <>
      <section className="saved-job-item">
        <div className="top-saved-box">
          <FontAwesomeIcon
            icon="fa-solid fa-check"
            size="xl"
            className="check-applied"
          />
          <h3>
            {job_title}, {company}
          </h3>
          <FontAwesomeIcon
            icon="fa-solid fa-circle-xmark"
            className="delete-saved"
          />
        </div>
        <div className="bottom-saved-box">
          <span>Review Posting</span>
          <span>
            <a href={website} target="_blank" rel="noopener noreferrer" className="apply-link">
              <span>Apply To Job  </span>
              <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" />
            </a>
          </span>
        </div>
      </section>
      <br />
    </>
  );
}

export default SavedJobItem;
