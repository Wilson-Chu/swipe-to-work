import React from "react";
import closeSymbol from "../../assets/closeSymbol.svg"
import { educationList, descWithLineBreaks } from "./homeHelpers";

const JobDetailsModal = function (props) {
  return (
    <div className="job-details-modal">
      <button className="job-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={props.closeModal} />
      </button>
      <h2>{props.jobs[props.jobIndex].job_title}</h2>
      <ul className="modal-job-details">
        <li>
          Company: {props.jobs[props.jobIndex].employer_name}
        </li>
        <li>
          City: {props.jobs[props.jobIndex].job_city}
        </li>
        <li>
          Province: {props.jobs[props.jobIndex].job_state}
        </li>
        <li>
          Mininum salary: {props.jobs[props.jobIndex].job_min_salary ? props.jobs[props.jobIndex].job_min_salary : "N/A"}
        </li>
        <li>
          Maximum salary: {props.jobs[props.jobIndex].job_max_salary ? props.jobs[props.jobIndex].job_max_salary : "N/A"}
        </li>
        <li>
          Job type: {props.jobs[props.jobIndex].job_employment_type}
        </li>
        <li>
          Job is remote? {(props.jobs[props.jobIndex].job_is_remote).toString()}
        </li>
        <li>
          Job description: {descWithLineBreaks(props.jobs[props.jobIndex].job_description)}
        </li>
        <li>
          Posted at: {props.jobs[props.jobIndex].job_posted_at_datetime_utc.split("T").shift()}
        </li>
          Education required: {educationList(props.jobs)}
        <li>
          No expereince required? {(props.jobs[props.jobIndex].job_required_experience.no_experience_required).toString()}
        </li>
      </ul>
    </div>
  )
};

export default JobDetailsModal;