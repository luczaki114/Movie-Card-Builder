# Movie-Card-Builder

## Use Case

The original app was built to help with creating rows of product cards that were being hand coded manually on a weekly basis. Not only was this tedious copy-paste work, but it was prone to a lot of human error that required diligent QA.

The app is a form builder with a preview card along side it so that the user can see the changes they are making, including a row preview below it.

The cards were repetitive in nature with several edge case scenarios that needed to be accounted for (adding superscripts and bold text in certain area, and a generated image URL based on project number and slot number). I accounted for these cases and included a helper function to write screen reader text, image alt text, and initial body copy (which many times used the same language). Once the row of cards was finished, the user could copy the finished HTML code and paste it directly into the CMS.

I reskinned the app as a Movie Card builder and removed the business specific logic from it.

## Tech used

- React.js via create-react-app
- Redux.js
- Draft.js
- Immutable.js
- Reselect.js
- Material.ui

## React, Redux, & Reselect

I followed the container/component architecture to seperate my concerns. I made my components dumb, and any state properties that a given component required I put in the containers.
Any state manipulation was done through redux, and the business logic for making changes was coded as middleware so that I can keep my actions and reducers clean; neither of these places should hold data manipulation code; actions are just payloads, and reducers sole responsibility is setting new state. I enchanced certain actions with meta data like the active card ID (a computed property based on the active row and card number), so that the right card is updated, but it didn't make sense to add this info into each action with the payload. I used reselect to get this info and cache it so that the operation didnt have to run everytime an action was dispatched.

## Draft & Immutable

Draft.js was added when I needed the ability to add superscript functionality to the body of the copy for each product, and also bold certain parts of the text. It forced me to use immutable, so adding that was a lot of scope creep, but in the end made for a better app and a great learning experience. Translating Draft.js's ContentState into simple HTML proved difficult (or rather more time consuming than it was worth to build out) so I added another plugin to help me with that.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`
