# 2017-tbia-app
Cross-platform mobile application for preliminary assessment of head trauma.

[![Build Status](https://travis-ci.org/bu-else/2017-tbia-app.svg?branch=Develop)](https://travis-ci.org/bu-else/2017-tbia-app)

## Features
#### Mobile App
- Login or signup (for first-time users)
- Patients can update their profile after signing up for an account
- Patients can view their profile
- Patients can take an examination containing a demographic survey and a battery of assessments
- Patients can view summary after taking an examination
- Assessment results will be sent to and stored on the server
- Logout

#### Back-end
Here're the built-in features comes with Anchor.
- Login system with forgot password and reset password
- Abusive login attempt detection
- User roles for analysts, clinicians, researchers, admins
- Analyst can view anonymized information
- Clinician can view information of specific users
- Researcher can view all information
- Admins can view update and delete all information
- Auto Backups
- Admin UI to view Database Records
- Custom Event Tracking
- User Feedback System
- Email Invites
- API Tokens


## Technology
- Back-end: [Anchor](https://github.com/hicsail/anchor)
- Database: [MongoDB](http://www.mongodb.org/)
- Server: [Massachusetts Open Cloud (MOC)](https://massopen.cloud/)
- Front-end: [Ionic](https://ionicframework.com/)

## Installation
```
git clone git@github.com:bu-else/2017-tbia-app.git
```

- [Back-end Deployment Instructions]()
- [Front-end Compilation Instructions](https://github.com/bu-else/2017-tbia-app/blob/feature-documentation-44/client/README.md)