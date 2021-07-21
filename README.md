# Front End Engineer – Practical Exercise

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and built with [TailwindCSS](https://tailwindcss.com/) and [ChartJS](https://www.chartjs.org/), with React-Router-DOM for routing, [SWR](https://swr.vercel.app/) for data fetching and Typescript.

## To run locally

Clone this project and run

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

Should you need to build this, you can do so with

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## About this project

This app queries data from two REST APIs and displays them in a friendly UI.

An overview page shows top content and a table view of events.
A content page shows all content in cards.
On click, cards show more info in a modal.
Modals have the option to open in a shop page for the content - that's where the timeseries data is rendered.

The app uses Typescript throughout. While this means some additional code is written, the app is more reliable and easier to refactor, and it comes with ootb documentation for components.
SWR is used for data fetching. SWR is very clever to avoid unecessary UI rerenders, with build-in cache and request deduplication.
For charting, this project was an opportunity to experiment with ChartJS, which uses html `canvas` instead of `svg` to generate the charts.

## Improvements

### Code and UX

With more time the code would have better structure and documentation as well as:

- lazy loading throughout especially for images - currently only at page level using a very rudimentary `Skeleton` component and the `Suspense` api
- tests implementation with `Jest`/`Enzyme` or `Cypress`

- While responsive, the app isn't pixel perfect for all screen sizes.
- Show pages cannot be accessed individually, only thought the modal, because they receive state through the `location` prop, but a different approach could be used to get page data directly from the API.
