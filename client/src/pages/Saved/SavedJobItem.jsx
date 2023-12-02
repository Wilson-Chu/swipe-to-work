import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SavedJobModal from "./SavedJobModal";
import { useAppliedJobsContext } from "../../providers/AppliedJobsProvider";

function SavedJobItem({ id, job_title, company, website, deleteSavedJob, updateSavedJobMarker, job, applied}) {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [oneSavedJob, setOneSavedJob] = useState({});
  // slideout animation
  const [isDeleted, setIsDeleted] = useState(false);

  const { appliedJobs, updateAppliedJobs } = useAppliedJobsContext();

  const removeSavedJob = function(id) {
    //for slideout animation
    setIsDeleted(true);

    deleteSavedJob(id);

    setTimeout(() => {
      setIsDeleted(false)
    }, 1000)
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
    // Toggle the 'applied' value if clicking on Check Mark icon
    const updatedData = {
      applied: !applied, // CHECK TO SEE IF THE DATABASE IS BEING UPDATED!!! (maybe use the updateAppliedJobs, appliedJobs etc..)
    };

    try {
      const updatedAppliedToggleValue = await updateSavedJobMarker(id, updatedData);
      console.log(`Saved job ${id} updated successfully. Applied toggle: ${updatedAppliedToggleValue}`);
      // You can perform additional actions if needed
    } catch (error) {
      console.error("Error updating saved job:", error);
      // Handle the error as needed
    }
  };

  const handleApplyToJob = async () => {
    // Always set applied to true if Apply to Job link is clicked
    const updatedData = {
      applied: true,
    };
  
    try {
      const updatedAppliedValue = await updateSavedJobMarker(id, updatedData);
      console.log(`Saved job ${id} updated successfully. Applied: ${updatedAppliedValue}`);
      // You can perform additional actions if needed
    } catch (error) {
      console.error("Error updating saved job:", error);
      // Handle the error as needed
    }
  };

  const handleUpdateAppliedJobs = () => {
    // Call updateAppliedJobs function here
    updateAppliedJobs(id);

    useEffect(() => {
      console.log("appliedJobsInUseEffect:", appliedJobs);
    }, [appliedJobs]);

    console.log("appliedJobs: ", appliedJobs);
  };

  return (
    <>
      <section className={`saved-job-item ${isDeleted ? "deleted": ""}`}>
        <div className="top-saved-box">
          <FontAwesomeIcon
            icon="fa-solid fa-check"
            size="xl"
            className={`check-applied ${applied ? "mark-applied": ""}`}
            onClick={handleAppliedToggle}
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
          <span className = "review-link" onClick={() => reviewPosting()}>
            Review Posting
          </span>
          <span onClick={handleApplyToJob}>
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
