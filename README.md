# 2017-tbia-app
Cross-platform mobile application for preliminary assessment of head trauma.

[![Build Status](https://travis-ci.org/bu-else/2017-tbia-app.svg?branch=Develop)](https://travis-ci.org/bu-else/2017-tbia-app)

Traumatic Brain Injury is one of the leading causes of military morbidity and mortality.  In addition, TBI associated with motor vehicle collisions and sports injuries are increasingly being recognized.  There are a few coach-sponsored or health care provider Apps which can help with concussion detection.  To date, there is no user-specific App for the assessment and monitoring of TBI and concussion.

This App will allow the individual to take a baseline test and then compare function in several domains, in real time, in a longitudinal fashion to assess hour to hour, day to day, or month to month improvements or changes.


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
git clone --recursive git@github.com:bu-else/2017-tbia-app.git
```

- [Back-end Deployment Instructions](https://github.com/bu-else/2017-tbia-app/blob/Develop/back-end/README.md)
- [Front-end Compilation Instructions](https://github.com/bu-else/2017-tbia-app/blob/Develop/client/README.md)

## Demo
Here's a demo of basic flow: `Welcome page` > `Login or Signup` > `Submit patient information` > `Home Page` > `View Profile` > `Start Assessment` > `View Summary`

![1-welcome](https://github.com/bu-else/2017-tbia-app/blob/Develop/demo/1-welcome.png)

![2-signup](https://github.com/bu-else/2017-tbia-app/blob/Develop/demo/2-signup.png)

![3-patient-info](https://github.com/bu-else/2017-tbia-app/blob/Develop/demo/3-patient-info.png)

![4-home](https://github.com/bu-else/2017-tbia-app/blob/Develop/demo/4-home.png)

![5-assessment](https://github.com/bu-else/2017-tbia-app/blob/Develop/demo/5-assessment.png)

![6-profile](https://github.com/bu-else/2017-tbia-app/blob/Develop/demo/6-profile.png)

![7-summary](https://github.com/bu-else/2017-tbia-app/blob/Develop/demo/7-summary.png)