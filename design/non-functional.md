# Non-functional requirements
Mobile App for Traumatic Brain Injury Assessment

* Logging
  * Every page view
  	* Last page/question seen (do we allow user to leave and come back to an assessment?)
  * User submissions (measurements)
* Storage
  * User accounts
  * User assessment results
* Configuration
  * Is the backend something that can be deployed within different institutions (or just one big cloud service)
* Performance
  * Timed questions
  * Real time features (free-form drawing)
* Cost
  * Storage
  * Development
  * Time
  * Insurance/liability
  * Assembling terms of use/end-user license agreements
* Interoperability: does it need to work with other services or frameworks
  * Integration with third-party medical records/data service (RedCap or any EPIC infrastructure)
* Flexibility
  * Is the backend something that can be deployed within different institutions (or just one big cloud service)
  * Is this primarily for users to self-assess or primarily for a clinical setting
* Accessibility
  * Is the target audience likely to require accessibility features?
* Security
  * Are users comfortable registering with identifying information
  * Should user infos be encrypted?
  * Is this going to be used in a clinical setting (HIPAA) or a research study (IRB)
* Disaster recovery
  * Users: Store locally or on server? Most likely on server.
  * Service provider: Depends on whether backend service is self-hosted or on the cloud