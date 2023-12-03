INSERT INTO users (id, email, password)
VALUES (1, 'alice@example.com', 'password');
INSERT INTO users (id, email, password)
VALUES (2, 'lorraine.quinyee@gmail.com', 'password');

INSERT INTO saved_jobs (
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
    user_id
  )
VALUES (
    1,
    'bBNNNNRQ90dsO3G1AAAAAA==',
    false,
    'Agilus Work Solutions',
    'Front End Developer',
    'Toronto',
    'ON',
    null,
    'Agilus is recruiting for a Front End Developer in the Financial Services industry in Hybrid. Agilus Work Solutions has a client in the financial services sector who is looking for a Front-End Developer to join their team on a permanent basis. Our client is one of the fastest growing private equity funds in North America with over $13 billion in assets. The ideal candidate will have demonstrated front-end engineering experience with the development of innovative web applications using React and Next.js, with a solid foundation in both TypeScript and JavaScript, ensuring a seamless user experience and high-performance interactions.\n\nResponsibilities\n• Develop innovative web applications using React and Next.js, with a solid foundation in both TypeScript and JavaScript, ensuring a seamless user experience and high-performance interactions\n• Collaborate effectively with backend teams, particularly those working with Python, to integrate frontend components with APIs and services\n• Implement efficient state management practices and optimize application performance to provide a responsive user interface\n• Ensure that all web applications are fully responsive and accessible (with varying roles), providing an inclusive experience for all users\n• Work closely with product managers, designers, and other stakeholders to translate requirements into high-quality front-end solutions\n• Implement robust testing frameworks and practices to ensure the reliability and the quality of the frontend code\n• Stay abreast of the latest trends and advancements in frontend development, particularly in React and Next.js, and continuously seek ways to innovate and improve processes\n• Create comprehensive documentation for frontend codebases and share knowledge and best practices with the broader engineering team\n\nRequirements\n• Degree in Computer science or Engineering\n• 3+ years of experience with at least one cloud platform (e.g., AWS, Azure, GCP). GCP preferred\n• Several years of hands-on experience developing web applications using React and Next.js, with a portfolio of completed projects having practical knowledge of TypeScript and JavaScript\n• Proficiency in Python, with experience integrating frontend components with Python-based backend services\n• Solid understanding of RESTful services and experience integrating frontend components with backend APIs\n• Expertise in creating responsive and visually appealing web pages using HTML and CSS, with a strong command of JavaScript\n• Experience with state management libraries such as Redux or Context API\n\nWhat''s In It For You\n• Work with the fastest growing private equity firm in North America\n• Play an essential role in in the development of the organization’s technology stack and long-term technology-enabled strategy\n\nInterested?\n\nPlease apply directly online by email trodriguez@agilus.ca\n\nAgilus would like to thank all candidates for their interest in this opportunity. Due to the volume of resumes we receive; we may only be able to respond directly to those candidates being selected for an interview.\n\nWe encourage you to visit agilus.ca regularly or subscribe to our email alerts atagilus.ca/Account/Registeras new exciting employment opportunities become available daily.',
    'FULLTIME',
    false,
    '2023-11-24T19:47:06.000Z',
    'http://www.dg.ca',
    1
  );


  
INSERT INTO preferences (
    id,
    job_title,
    company,
    city,
    province,
    min_salary,
    job_type,
    is_remote,
    no_experience_required,
    min_education_level,
    user_id
  )
VALUES (
    1,
    'javascript developer',
    null,
    'Toronto',
    'ON',
    60000,
    'Fulltime',
    true,
    true,
    'bachelor''s degree',
    1
  );