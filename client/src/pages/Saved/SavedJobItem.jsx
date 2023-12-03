import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SavedJobModal from "./SavedJobModal";
import { useAppliedJobsContext } from "../../providers/AppliedJobsProvider";

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

  const { appliedJobs, updateAppliedJobs } = useAppliedJobsContext();

  const removeSavedJob = function (id) {
    //for slideout animation
    setIsDeleted(true);

    deleteSavedJob(id);

    setTimeout(() => {
      setIsDeleted(false);
    }, 1000);
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
      applied: appliedState ? false : true, // DB NOT BEING UPDATED HERE FOR SOME REASON?
    };

    try {
      let updatedAppliedToggleValue = await updateSavedJobMarker(
        id,
        updatedData
      );
      console.log(
        `1. Saved job ${id} updated successfully. Applied toggle: ${updatedAppliedToggleValue}`
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
      console.log(
        `2. Saved job ${id} updated successfully. Applied: ${updatedAppliedValue}`
      );
    } catch (error) {
      console.error("Error updating saved job:", error);
    }
  };

  const handleUpdateAppliedJobs = async () => {
    await updateAppliedJobs(id);
  };

  useEffect(() => {
    setAppliedState(appliedJobs.includes(id));
    console.log("3. appliedJobs:", appliedJobs);
  }, [appliedJobs]);

  return (
    <>
      <section className={`saved-job-item ${isDeleted ? "deleted" : ""}`}>
        <div className="top-saved-box">
          <FontAwesomeIcon
            icon="fa-solid fa-check"
            size="xl"
            className={`check-applied ${appliedState ? "mark-applied" : ""}`}
            onClick={() => {
              handleAppliedToggle();
              handleUpdateAppliedJobs();
            }}
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
          <span className="review-link" onClick={() => reviewPosting()}>
            Review Posting
          </span>
          <span
            onClick={() => {
              handleApplyToJob();
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
