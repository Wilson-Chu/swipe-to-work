import React from "react";
import closeSymbol from "../../assets/closeSymbol.svg"
import { educationList, descWithLineBreaks } from "./homeHelpers";

const JobDetailsModal = function (props) {
  return (
    <div className="job-details-modal">
      <button className="job-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={props.closeModal} />
      </button>
      <h2>{props.data[props.job].job_title}</h2>
      <ul className="modal-job-details">
        <li>
          Company: {props.data[props.job].employer_name}
        </li>
        <li>
          City: {props.data[props.job].job_city}
        </li>
        <li>
          Province: {props.data[props.job].job_state}
        </li>
        <li>
          Mininum salary: {props.data[props.job].job_min_salary ? props.data[props.job].job_min_salary : "N/A"}
        </li>
        <li>
          Maximum salary: {props.data[props.job].job_max_salary ? props.data[props.job].job_max_salary : "N/A"}
        </li>
        <li>
          Job type: {props.data[props.job].job_employment_type}
        </li>
        <li>
          Job is remote? {(props.data[props.job].job_is_remote).toString()}
        </li>
        <li>
          Job description: {descWithLineBreaks(props.data[props.job].job_description)}
        </li>
        <li>
          Posted at: {props.data[props.job].job_posted_at_datetime_utc.split("T").shift()}
        </li>
          Education required: {educationList(props.data)}
        <li>
          No expereince required? {(props.data[props.job].job_required_experience.no_experience_required).toString()}
        </li>
      </ul>
    </div>
  )
};

export default JobDetailsModal;