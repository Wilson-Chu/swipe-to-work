import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SavedJobModal from "./SavedJobModal";

function SavedJobItem({ id, job_title, company, website, deleteSavedJob, job, applied}) {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [oneSavedJob, setOneSavedJob] = useState({})

  const removeSavedJob = function(id) {
    deleteSavedJob(id);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const reviewPosting = function () {
    try {
      setOneSavedJob(job);
      setIsModalOpen(true);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const clickApply = function () {

  }

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
          <span onClick={() => reviewPosting()}>
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
          {isModalOpen && <SavedJobModal job={oneSavedJob} closeModal={closeModal} />}
      <br />
    </>
  );
}

export default SavedJobItem;
