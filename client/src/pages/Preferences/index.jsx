import React from "react";
import "./Preferences.scss";

function Preferences(props) {
  const [jobTitle, setJobTitle] = useState("");


  // const handleSave = (event) => {
  //   event.preventDefault();

  // }

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
          <input type="text"></input>
        </label>

        <label>
          City:
          <input type="text"></input>
        </label>

        <label>
          Province:
          <select>
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
          <select>
            <option value="">Select Salary</option>
            <option value="40000"> $40,000+ </option>
            <option value="60000"> $60,000+ </option>
            <option value="80000"> $80,000+ </option>
            <option value="100000"> $100,000+ </option>
          </select>
        </label>

        <label>
          Job Type:
          <select>
            <option value="">Select Job Type</option>
            <option value="Fulltime">Fulltime</option>
            <option value="Temporary">Temporary</option>
          </select>
        </label>

        <label>
          Remote:
          <select>
            <option value=""> Select Remote </option>
            <option value="remote"> Yes </option>
            <option value="not remote"> No </option>
          </select>
        </label>

        <label>
          Experience:
          <select>
            <option value=""> Select Experience </option>
            <option value="required"> Required </option>
            <option value="not required"> Not Required </option>
          </select>
        </label>

        <label>
          Required Education Level:
          <select>
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
