import React from "react";
import "./Preferences.scss";
import { useState } from "react";

function Preferences(props) {
  
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [minSalary, setMinSalary] = useState('');
  const [jobType, setJobType] = useState('')
  const [remote, setRemote] = useState('');
  const [experience, setExperience] = useState('');
  const [education, setEducation] = useState('');


  const handleSave = (event) => {
    event.preventDefault();

    

  }

  return (
    <>
      <h2>My Job Preferences</h2>

      <body>
        <label>
          Job Title:
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
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
            onChange={(e) => setMinSalary(e.target.value)}
          >
            <option value="">Select Salary</option>
            <option value="40000"> $40,000+ </option>
            <option value="60000"> $60,000+ </option>
            <option value="80000"> $80,000+ </option>
            <option value="100000"> $100,000+ </option>
          </select>
        </label>

        <label>
          Job Type:
          <select value={jobType} onChange={(e) => setJobType(e.target.value)}>
            <option value="">Select Job Type</option>
            <option value="Fulltime">Fulltime</option>
            <option value="Temporary">Temporary</option>
          </select>
        </label>

        <label>
          Remote:
          <select
            value={remote}
            onChange={(e) => setRemote(e.target.value === "true")}
          >
            <option value="false"> Select Remote </option>
            <option value="true"> Yes </option>
            <option value="false"> No </option>
          </select>
        </label>

        <label>
          Experience:
          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value === "true")}
          >
            <option value="false"> Select Experience </option>
            <option value="true"> Required </option>
            <option value="false"> Not Required </option>
          </select>
        </label>

        <label>
          Required Education Level:
          <select
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          >
            <option value=""> Select Education Level </option>
            <option value="postgraduate"> Postgraduate degree </option>
            <option value="bachelor"> Bachelor's degree </option>
            <option value="associates"> Associate's degree </option>
            <option value="high school"> High School </option>
          </select>
        </label>

        <button onClick={handleSave}>Save</button>
      </body>
    </>
  );
}

export default Preferences;
