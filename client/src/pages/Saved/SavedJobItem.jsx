import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SavedJobModal from "./SavedJobModal";
import { useApplicationDataContext } from "../../providers/ApplicationDataProvider";

function SavedJobItem({
  id,
  job_title,
  company,
  website,
  deleteSavedJob,
  updateSavedJobMarker,
  job,
  modal,
  applied,
}) {
  const [appliedState, setAppliedState] = useState(!!applied);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [oneSavedJob, setOneSavedJob] = useState({});
  // slideout animation
  const [isDeleted, setIsDeleted] = useState(false);

  const { state, updateAppliedJobs } = useApplicationDataContext();
  const appliedJobs = state.appliedJobs;

  const removeSavedJob = function (id) {
    //for slideout animation
    setIsDeleted(true);

    deleteSavedJob(id);

    setTimeout(() => {
      setIsDeleted(false);
    }, 1000);
    setAppliedState(() => appliedJobs.includes(id - 1));
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

  const handleAppliedToggle = async () => {
    setAppliedState((prevState) => !prevState);
    // Toggle the 'applied' value if clicking on Check Mark icon
    const updatedData = {
      applied: appliedState ? false : true,
    };

    try {
      let updatedAppliedToggleValue = await updateSavedJobMarker(
        id,
        updatedData
      );
    } catch (error) {
      console.error("Error updating saved job:", error);
    }
  };

  const handleApplyToJob = async () => {
    // event.preventDefault();

    setAppliedState(true);
    // Always set applied to true if Apply to Job link is clicked
    const updatedData = {
      applied: appliedState ? true : true,
    };

    try {
      let updatedAppliedValue = await updateSavedJobMarker(id, updatedData);
    } catch (error) {
      console.error("Error updating saved job:", error);
    }
  };

  const handleUpdateAppliedJobs = async (toggle) => {
    await updateAppliedJobs(id, toggle);
  };

  useEffect(() => {
    setAppliedState(appliedJobs.includes(id));
  }, [appliedJobs]);

  return (
    <>
      <section className={`saved-job-item ${isDeleted ? "deleted" : ""}`}>
        <div className="top-saved-box">
          {applied ? (
            <FontAwesomeIcon
              icon="fa-solid fa-check"
              size="xl"
              className="mark-applied"
              onClick={() => {
                handleAppliedToggle();
                handleUpdateAppliedJobs(true);
              }}
            />
          ) : (
            <FontAwesomeIcon
              icon="fa-solid fa-question"
              size="xl"
              className="question-applied"
              flip={null}
              onClick={() => {
                handleAppliedToggle();
                handleUpdateAppliedJobs(true);
              }}
            />
          )}
          <div className="job-info-container">
            <h3>
              {job_title}, {company}
            </h3>
          </div>
          <FontAwesomeIcon
            icon="fa-solid fa-circle-xmark"
            className="delete-saved"
            onClick={() => removeSavedJob(id)}
          />
        </div>
        <div className="bottom-saved-box">
          <span className="review-link" onClick={() => reviewPosting()}>
            Review Posting
          </span>
          <span
            onClick={() => {
              handleApplyToJob();
              handleUpdateAppliedJobs(false);
            }}
          >
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="apply-link"
            >
              <span>Apply To Job </span>
              <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" />
            </a>
          </span>
        </div>
      </section>
      {isModalOpen && (
        <SavedJobModal
          job={oneSavedJob}
          closeModal={closeModal}
          modal={modal}
        />
      )}
      <br />
    </>
  );
}

export default SavedJobItem;
