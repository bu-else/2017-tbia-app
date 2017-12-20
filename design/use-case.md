# Use Case I
Mobile App for Traumatic Brain Injury Assessment

* Brief Description
  * A user self-administers an evaluation to determine existence or extent of a traumatic brain injury (TBI).
* Actors
  * Patient/User (Primary) 
  * Evaluator/Clinician (Secondary)  
  * Administrator (Tertiary)  	
* Flow of Events
    * Basic Flow 
        * User downloads application from their device's application store
        * User creates account, with optional physician affiliation code
          * User verifies their email address
          * User sets up device passcode and (optionally) biometric authentication
        * User agrees to terms of use/end-user license agreement
        * User receives confirmation email with first-time tips
        * User signs in with passcode or biometric authentication and lands on personalized dashboard [4]
        * User can begin evaluation
          * User draws, answers questions to evaluate their TBI status
          * User sees progress bar
          * If physician affiliated, can leave comments for physician[1][2]
        * User finishes all questions
        * User is informed their summary will be available upon evaluator's review
    * Alternative Flows
        * [1] User switches applications, then returns in under 5 minutes
          * User continues evaluation 
        * [2] User switches applications and does not return for at least 5 minutes, or user closes application
          * User signs back in with passcode or biometric authentication
          * User lands on dashboard with option to resume assessment
        * [3] User cannot log in (e.g., forgot passcode, biometric failure)
          * User requests a password reset link via email
          * User follows link in a browser and answers security questions to enable a password reset
        * [4] User can see past results 
          * User returns to dashboard 