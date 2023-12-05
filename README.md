


# Swipe to Work

<!-- ![App Logo](https://github.com/Wilson-Chu/swipe-to-work/blob/main/client/src/public/logo-yellowbg.png?raw=true ) -->
<div style="text-align:center;">
  <img src="https://github.com/Wilson-Chu/swipe-to-work/blob/main/client/src/public/logo-yellowbg.png?raw=true" alt="App Logo" width="500">
</div>

Swipe to Work is a dating app clone that takes in the user's job-related preferences such as the job title, company, FT/PT, remote/on-site, etc and fetches jobs from an external API (JSearch) to display jobs that match those preferences in an easy-to-read format. The user can "pass" on the job and move on to the next one, "save" that specific job to their own saved job list, or use the "50/50" button that will make a decision for them at random. 

The saved jobs list allows users to review the full job posting, visit a link where they can apply directly, keep track of the jobs that they have applied to, and delete jobs that they no longer want to keep. 

In situations where the user reaches the end of the fetched job list, or where there are no jobs available based on the preferences entered, users will see a message that reflects these cases.

This project was made with React, NodeJS, Express, postgreSQL and the JSearch API.

<p align="center">
  <img src="https://github.com/Wilson-Chu/swipe-to-work/blob/main/docs/stw-login.PNG?raw=true" alt="Login/Register page" width="500">
</p>

<p align="center">
  <img src="https://github.com/Wilson-Chu/swipe-to-work/blob/main/docs/stw-login-auth0.PNG?raw=true" alt="Login with Auth0" width="500">
</p>

<p align="center">
  <img src="https://github.com/Wilson-Chu/swipe-to-work/blob/main/docs/stw-prefs.PNG?raw=true" alt="Preferences page" width="500">
</p>

<p align="center">
  <img src="https://github.com/Wilson-Chu/swipe-to-work/blob/main/docs/stw-home-results.PNG?raw=true" alt="Home page with results" width="500">
</p>

<p align="center">
  <img src="https://github.com/Wilson-Chu/swipe-to-work/blob/main/docs/stw-saved.png?raw=true" alt="Saved jobs page" width="500">
</p>

### Future Developments
Some ideas for future app features include:
- "My Profile" page: users can enter their resumes and other relevant info so that they could automatically be matched with jobs based on their background

- "My Achievements" page: gamifying the app to record job applications and other job-related activities like attending networking events, and rewarding users with achievements like special badges and hidden graphics

- Use geolocation API so users can get jobs directly in their area


### Environment Setup (don't skip this!)
Copy `env.example` to `.env` to override the default env values.
See server `README.md` for details

### Database Setup
- Database must be running before starting the server app
- Details for local database in server `README.md`
- don't use a container database unless you really want a challenge

### Starting as a Single App (for Production only)
```bash
npm run build
npm start
```
Browse to http://localhost:8080

### Starting as Individual Apps (for Development)
```bash
cd server
npm install
npm run local

cd client
npm install
npm start
```

### Render Cloud Service
- https://render.com/
- https://dashboard.render.com/

### Edit Repos that Render can see
- Github -> User Settings
- Integrations.Applications
- Render - Configure
