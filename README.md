
<h1 style="text-align: center;">Walt Whitman Poem Generator</h1>

<h3 align = "center"> A project to randomly generate Walt Whitman poems, 10.16.2020

<h2 align = "center"> By Brittany Lindgren

<h1 align = "center"><img width='500' height='350' src='./src/images/poetry.jpg'>

<span>Photo by <a href="https://unsplash.com/@iamtru?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Trust "Tru" Katsande</a> on <a href="https://unsplash.com/s/photos/poetry?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>


## Description

This project utilizes the RapidAPI Walt Whitman Poems API to randomly generate a Walt Whitman poem every time the page is refreshed. When you're in the mood for some Walt Whitman poems, whether it's a gloomy rainy day or you're sitting on a bench in the sun, watching the bees buzz around, fire up this application and enjoy!

## Setup/Installation Requirements

1. Clone project from github
2. Open in IDE / Text Editor
3. Open terminal
4. Check that you are in the main directory, file path should end with `whitman-generate`. If you are not in the main directory, navigate to main directory with `cd whitman-generate`
5. Enter the following commands in order, to install, build and run the application :
* `npm install`  (This command is only necessary the first time you open the project on your computer. It may take several minutes for the install to complete - this is normal)
* `dotnet build` 
* `dotnet run`

To use this project on your local machine, you will need an API key for the Walt Whitman Poems API
1. Navigate to the [RapidAPI website](https://rapidapi.com) and set up an account.
2. Search for the [Walt Whitman Poems API](https://rapidapi.com/pafmon/api/walt-whitman-poems/details) and select the the Walt Whitman Poems result.
3. Click on the `endpoints` link and you will find your API Key.

To securely add your API Key to the project, follow the steps below
1. Create a .env file. Once added, this file should appear greyed out (ADD IMAGE)
2. Add the following to the .env file: API_KEY = "YOUR API KEY HERE", replacing the text between the " " with your actual API Key. 
3. You should now be able to run the program and use this on your local machine.

## Known Bugs / Issues

There are no known bugs at this time. 

## Support and contact details

Please feel free to contact me through GitHub (username: LINDGRENBA) with any questions, ideas or concerns.

## Technologies Used

* HTML5
* CSS3
* JavaScript
* RapidAPI - Walt Whitman Poem API
* VS Code
* Git and GitHub

### License

*This site is licensed under the MIT license.*

Copyright (c) 2020 **_Brittany A Lindgren_**


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
