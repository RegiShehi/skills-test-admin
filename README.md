# Simple dash app

Project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

---

### Step 1

create an `env` file with an env variable for the api endpoint named `REACT_APP_ENDPOINT` with `https://run.mocky.io` as value.

### Step 2

Set the axios default `baseURL` equal to our env variable `REACT_APP_ENDPOINT`.

Go to the `httpRequests` folder and open the `users.http.js` file and set `/v3/ecb7eac3-9723-4ed9-bf47-f634b7a277cc` as our request url.

### Step 3

Now we need to fetch our data. Go into the Users component and complete the function `getUsers` with an async code that
call our `httpGetUsersList` api call.

### Step 4

Save fetched data in our existent redux store.

### Step 5

Render the data like our `list-sample.png` image into the src folder. you can style the rows using sass and grid css.
Fell free to improve the result that you see in the sample image, and write your own style.
If the returned data for an user contain an empty profile pic link fell free to replace it with a placeholder.

### Step 6

Now we would like to represent our user data in a single page, like a profile page.

- Add a route and display the `UserDetails` component.

- You must write from scratch this component. Here we need to navigate from our table, and pass an id as our new route param.

- With this is we can find our user in the stored usersList.

- Make your own style for this page.

- handle refresh in this page, and properly refetch userslist when needed.

### Step 7

Now we would like add a new user to our list. We'll do so with redux and `react-hook-form`.

- Add a route and display the `NewUser` page component.

- You must write from scratch this component. Here we need to navigate from our route page maybe with an `add` button.

- In this page we must have a form made with the popular `react-hook-form` library (you need to install it via yarn ),
  with all the users fields needed. ( except for the photo_link ).

- Add some style for this page, remember to use a sass file and grid css.

- On form submit the user will be added to our list and visible in out main page.
