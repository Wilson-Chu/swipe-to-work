import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SavedJobItem({ id, job_title, company, website, deleteSavedJob }) {

  const removeSavedJob = function(id) {
    deleteSavedJob(id);
  };

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
            onClick={() => removeSavedJob(id)}
          />
        </div>
        <div className="bottom-saved-box">
          <span onClick={() => console.log(`You clicked on job posting: ${id}`)}>
            Review Posting
          </span>
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
