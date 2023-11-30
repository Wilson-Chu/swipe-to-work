import React from "react";
import "./Preferences.scss";
import "./buttons.scss";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Preferences(props) {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [minSalary, setMinSalary] = useState("0");
  const [jobType, setJobType] = useState("");
  const [remote, setRemote] = useState(undefined);
  const [experience, setExperience] = useState(undefined);
  const [education, setEducation] = useState("");

  const [jobTitleError, setJobTitleError] = useState("");

  const navigate = useNavigate();

  const handleSave = (event) => {
    event.preventDefault();

    // Check if the job title is filled
    if (!jobTitle.trim()) {
      setJobTitleError("Job Title cannot be empty");
      return;
    }
    // Reset the job title error when input is not empty
    setJobTitleError("");

    // for boolean rows: convert the option of "Select xxx" to false
    const formattedRemote =
      remote === undefined ? false : remote === null ? false : remote;
    const formattedExperience =
      experience === undefined
        ? false
        : experience === null
        ? false
        : experience;

    const newPrefs = {
      jobTitle,
      company,
      city,
      province,
      minSalary,
      jobType,
      remote: formattedRemote,
      experience: formattedExperience,
      education,
      userID: 1,
    };

    axios
      .put("/api/prefs", newPrefs, {headers: { 'x-user-auth': 999}}) // headers can be accessed using req.headers later [useful for userID]
      .then((res) => navigate("/"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="pref">
      <h2>My Job Preferences</h2>

      <form className="preferences-input">
        <label>
        {jobTitleError && <p style={{ color: "red" }}>{jobTitleError}</p>}
          Job Title:
          <input
            required
            placeholder="web developer...?"
            type="text"
            value={jobTitle}
            onChange={(e) => {
              setJobTitle(e.target.value);
              // Clear the error when the user types
              setJobTitleError((prev) =>
                e.target.value ? "" : "Job Title cannot be empty"
              );
            }}
          />
        </label>

        <label>
          Company:
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </label>

        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>

        <label>
          Province:
          <select
            value={province}
            onChange={(e) => setProvince(e.target.value)}
          >
            <option value="">Select Province</option>
            <option>NL</option>
            <option>PE</option>
            <option>NS</option>
            <option>NB</option>
            <option>QC</option>
            <option>ON</option>
            <option>MB</option>
            <option>SK</option>
            <option>AB</option>
            <option>BC</option>
            <option>YT</option>
            <option>NT</option>
            <option>NU</option>
          </select>
        </label>

        <label>
          Salary:
          <select
            value={minSalary}
            onChange={(e) => setMinSalary(Number(e.target.value))}
          >
            <option value="0">Select Salary</option>
            <option value="40000"> $40,000+ </option>
            <option value="60000"> $60,000+ </option>
            <option value="80000"> $80,000+ </option>
            <option value="100000"> $100,000+ </option>
          </select>
        </label>

        <label>
          Job Type:
          <select value={jobType} onChange={(e) => setJobType(e.target.value)}>
            <option value="NULL">Select Job Type</option>
            <option value="Fulltime">Fulltime</option>
            <option value="Temporary">Temporary</option>
          </select>
        </label>

        <label>
          Remote:
          <select
            value={remote}
            // allow user to go back to the Select Remote option after selecting Yes/No
            onChange={(e) =>
              setRemote(
                e.target.value === "true"
                  ? true
                  : e.target.value === "false"
                  ? false
                  : null
              )
            }
          >
            <option value=""> Select Remote </option>
            <option value="true"> Yes </option>
            <option value="false"> No </option>
          </select>
        </label>

        <label>
          Experience:
          <select
            value={experience}
            onChange={(e) =>
              setExperience(
                e.target.value === "true"
                  ? true
                  : e.target.value === "false"
                  ? false
                  : null
              )
            }
          >
            <option value=""> Select Experience </option>
            <option value="true"> Required </option>
            <option value="false"> Not Required </option>
          </select>
        </label>

        <label>
          Education Level:
          <select
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          >
            <option value="null"> Select Education Level </option>
            <option value="postgraduate"> Postgraduate degree </option>
            <option value="bachelor"> Bachelor's degree </option>
            <option value="associates"> Associate's degree </option>
            <option value="high school"> High School </option>
          </select>
        </label>
      </form>

      <button className="button-74" role="button" onClick={handleSave}>
        Save
      </button>
    </div>
  );
}

export default Preferences;
