# IIT-BHU Internship Interview

The objective of this take home test is to have a running web app. By webapp what we mean is a nice representation of the data. This exercise will not be limited to only writing the algorithm but focus on:
1. reading the documentation
2. exploring the API's provided
3. coming up with creative design to show the output, and,
4. your innovation.

Here is what we would like you to do for a preliminary test:

## Problem statement
Build a web app that prepares the org chart using the zenefits platform API's. The org chart will be a standard tree structure.

The list of nodes can be obtained from the API https://api.zenefits.com/core/people. The usage of the API is explained in References below.

These points should help you while implementing the app
1. Each person in the following API will represent a node who can be uniquely identified by `id` attribute. 
2. You have to consider only the person whose status is `active`. 
3. Each person will have a manager too. 
4. If the url in manager is `null`, it means they are the root node in the hierarchy. 

The usage of the API is explained in References below.

You **should implement** at least one of your own additional things to show off your abilities (for example list of departments, locations, all employees in a location etc).

Use whatever libraries, documentation, tutorials, or frameworks you consider necessary.

## How to submit:
Please provide the github url where the code resides. Don't forget to add a link of a video demo of your application (can be uploaded in drive, dropbox, github). Please make sure the link is accessible for everyone. Also we will be looking for a live demo on our discussion on this later during in person interview.

While there is no specific timeline, It should take you no more than 1 day to complete the task. Please feel free to email me [shivam.gupta@zenefits.com] with any questions or clarifications. Once you are done, you can send the github links to the TPR's.

The final date of submission will be March 17, 2020 12 PM.

## References
Zenefits developer docs: https://developers.zenefits.com/docs/getting-started

Authorization token: `elZxQlHDSUallvL3OnnH`

Here is a sample curl request:
`curl -X GET -H "Authorization: Bearer elZxQlHDSUallvL3OnnH" "https://api.zenefits.com/core/companies"`

## Judgement Criteria
These are the factors in priority order on which a submission will be judged:
1. **Completion of the app** - The app needs to be in a running state and changes made in the underlying data should reflect if the same code is executed again. The app will be reviewed in face to face rounds.
2. **Additional feature** - Additional feature introduced by you (It can be in the same page or a completely different page)
3. **Representation** - The way in which data is represented. Consider that the data will be shown to a non tech person who should be able to understand the company hierarichal structure just by looking into it.
