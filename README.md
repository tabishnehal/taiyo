# Contact and Chart-Map

:link: [Deployment link](https://tabishnehal.github.io/taiyo)

A contact management app with Charts and Maps using ReactJS, TypeScript,
TailwindCSS, React Router v6 and React Query aka TanstackQuery.

## Contacts

Made use of Redux to store the contact data

route - `contacts/`

- displays a list of all added contacts.
  Each contact have a button to view the contacts details.

route - `contacts/createContactForm`

- contains a form for adding contacts.

\*contactId is dynamic.

route - `contacts/view/contactId`

- displays details of contact having id equivalent to contactId.

route - `contacts/edit/contactId`

- contains a form for editing contact.

route - `contacts/delete/contactId`

- used to delete contact.

## Charts and Maps:

A simple dashboard with:

- A line graph showing the cases fluctuations
- A react leaflet map with markers that indicates the country name, total number
  of active, recovered cases and deaths in that particular country as a popup.

route - `chart-map/`

- displays dashboard.

endpoints used:

- Country Specific data of cases: https://disease.sh/v3/covid-19/countries
  ```
   [
     {
       "updated": 1685072936033,
       "country": "Afghanistan",
       "countryInfo": {
         "_id": 4,
         "iso2": "AF",
         "iso3": "AFG",
         "lat": 33,
         "long": 65,
         "flag": "https://disease.sh/assets/img/flags/af.png"
       },
       "cases": 220994,
       "todayCases": 0,
       "deaths": 7913,
       "todayDeaths": 0,
       "recovered": 196732,
       "todayRecovered": 0,
       "active": 16349,
       "critical": 45,
       "casesPerOneMillion": 5423,
       "deathsPerOneMillion": 194,
       "tests": 1258172,
       "testsPerOneMillion": 30872,
       "population": 40754388,
       "continent": "Asia",
       "oneCasePerPeople": 184,
       "oneDeathPerPeople": 5150,
       "oneTestPerPeople": 32,
       "activePerOneMillion": 401.16,
       "recoveredPerOneMillion": 4827.26,
       "criticalPerOneMillion": 1.1
     },
     {
       ...
     },
     ...
   ]
  ```
- Graph data for cases with date:
  https://disease.sh/v3/covid-19/historical/all?lastdays=all

  ```
  {
    "cases": {
      "1/22/20": 557,
      "1/23/20": 657,
      "1/24/20": 944,
      ...

    },
    "deaths": {
      "1/22/20": 17,
      "1/23/20": 18,
      "1/24/20": 26,
      ...
    },
    "recovered": {
      "1/22/20": 30,
      "1/23/20": 32,
      "1/24/20": 39,
      ...
    }
  }
  ```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
