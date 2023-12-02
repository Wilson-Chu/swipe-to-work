export const educationList = (job) => {
  const requiredEducation = [];
  for (const key in job) {
    if (key === "degree_mentioned") { break; }
    if (job[key] === true) {
      let educationType = key.replace(/_/g, " ");
      requiredEducation.push(educationType);
    }
  }
  return requiredEducation; // Return the array of education types
};

export const descWithLineBreaks = (jobDescription) => {
  return jobDescription.split("\n").map((line, index) => {
    return (
      <p key={index}>
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