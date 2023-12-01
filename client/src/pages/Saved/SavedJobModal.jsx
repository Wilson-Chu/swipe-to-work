import React from "react";
import closeSymbol from "../../assets/closeSymbol.svg";
import { educationList, descWithLineBreaks } from "../Home/homeHelpers";

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
    <div className="job-details-modal">
      <button className="job-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={props.closeModal} />
      </button>
      <h2>{job_title}</h2>
      <ul className="modal-job-details">
        <li>Company: {company}</li>
        <li>City: {city}</li>
        <li>Province: {province}</li>
        <li>Mininum salary: {min_salary ? min_salary : "N/A"}</li>
        <li>Job type: {job_type}</li>
        <li>Job is remote? {is_remote.toString()}</li>
        <li>Job description: {descWithLineBreaks(job_description)}</li>
        <li>Posted at: {posted_at.split("T").shift()}</li>
        {/* Education required: {educationList(props.jobs)}
          <li>
            No experience required? {(props.jobs[props.jobIndex].job_required_experience.no_experience_required).toString()}
          </li> */}
      </ul>
    </div>
  );
};

export default SavedJobModal;
