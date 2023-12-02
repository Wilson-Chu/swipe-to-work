import React from "react";
import closeSymbol from "../../assets/closeSymbol.svg";
import {
  descWithLineBreaks,
  jobTypeFormatter,
} from "../Home/homeHelpers";
import "./SavedJobModal.scss"

const SavedJobModal = function (props) {
  const {
    id,
    job_posting_id,
    applied,
    company,
    job_title,
    city,
    province,
    min_salary,
    job_description,
    job_type,
    is_remote,
    posted_at,
    website,
    user_id,
  } = props.job;

  return (
    <div className="saved-job-details-modal-container">
      <button className="saved-job-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={props.closeModal} />
      </button>
      <h2>{job_title}</h2>
      <div className="saved-modal-job-details">
        <section><span>Company:</span> {company}</section>
        <section><span>City:</span> {city}</section>
        <section><span>Province:</span> {province}</section>
        <section><span>Mininum salary:</span> {min_salary ? min_salary : "N/A"}</section>
        <section><span>Job type:</span> {jobTypeFormatter(job_type)}</section>
        <section><span>Job is remote?</span> {is_remote.toString()}</section>
        <section><span className="saved-job-desc">Job description:</span>{descWithLineBreaks(job_description)}</section>
        <section><span>Posted at:</span> {posted_at.split("T").shift()}</section>
      </div>
    </div>
  );
};

export default SavedJobModal;
