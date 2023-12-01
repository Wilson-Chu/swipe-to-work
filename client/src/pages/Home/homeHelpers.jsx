export const educationList = (job) => {
  const requiredEducation = [];
  for (const key in job) {
    if (key === "degree_mentioned") { continue; }
    if (key === "degree_preferred") { continue; }
    if (key === "professional_certification_mentioned") { continue; }
    if (job[key] === true) {
      let educationType = key.replace(/_/g, " ");
      requiredEducation.push(educationType);
    }
  }
  if (requiredEducation.length === 0) {
    requiredEducation.push("N/A")
  }
  return requiredEducation;
};

export const descWithLineBreaks = (jobDescription) => {
  return jobDescription.split("\n").map((line, index) => {
    return (
      <p className="job-desc-details"
        key={index}>
        {line}
      </p>
    );
  });
};

// original data from api -> job_employment_type: "FULLTIME"
export const jobTypeFormatter = (jobType) => {
  if (jobType) {
    if (jobType.toLowerCase().includes("fulltime")) {
      return "Full-time"
    } else {
      return "Part-time"
    }
  }
};