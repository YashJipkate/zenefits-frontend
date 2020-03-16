# Zenefits Online Portal

[![Netlify Status](https://api.netlify.com/api/v1/badges/98f9f68b-8109-4fec-8284-a9d2862bdf7f/deploy-status)](https://app.netlify.com/sites/zenefits-employee-portal/deploys) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/24d168fc46b5459f82c908e94c2082f7)](https://www.codacy.com/manual/YashJipkate/zenefits-frontend?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=YashJipkate/zenefits-frontend&amp;utm_campaign=Badge_Grade) [![YashJipkate](https://circleci.com/gh/YashJipkate/zenefits-frontend.svg?style=svg)](https://circleci.com/gh/YashJipkate/zenefits-frontend)

Submission for the Zenefits internship assignment. Zenefits online portal is an Angular web app with backend in Express.js. This repo houses the frontend side, for the backend code please visit [zenefits-backend](https://github.com/YashJipkate/zenefits-backend). Some salient features of this app are:

- Uses customized [Google Charts API](https://developers.google.com/chart/interactive/docs/gallery/orgchart)'s    Organization chart to build the org chart.
- Shows all the companies associated with the Auth token in an attractive carousel.
- Shows all the departments associated with the Auth token in the carousel.
- Social (Google and Email) authentication using Auth0 integration.
- CircleCI integration for testing and Continous Integration.
- Deployed on Netlify.
- 'A' quality code certified by Codacy.
- Code base follows best practices.

## Development server

- Run the backend server. Instructions [here](https://github.com/YashJipkate/zenefits-backend/blob/master/README.md).

- Replace all ocurrences of https://zenefits-backend.herokuapp.com by http://localhost:3000.

- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
