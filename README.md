# CRUD-Posts-with-GAuth

A basic app with custom API allowing logged in users to perform CRUD actions on a list of dummy posts

## Posts basic CRUD app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The technology stack includes **React**, **React-Router-DOM**, **Redux**, **Redux-Form** and **Redux-Thunk**.

The client part includes a custom middleware for validating JSON schema of the application state.

Custom API is created with the use of **[json-server]**(https://github.com/typicode/json-server) and data is kept internally in `db.json` file.

## Setting up

The project contains two main directories, one for the client and another for api.
To boot it you should run `npm install` in both `api` and `client` directories and run them simultaneously in separate terminal windows using `npm start` command. The client will then run on `http://localhost:3000` and the API on `http://localhost:3001`.

## Google Auth

lorem ipsum

- GAuth: using the proper key in a .env file (add .env example and describe how to rewrite it)
- perform CRUD actions

### To do:

- add tests
- describe stack and usage (Jest, Enzyme) in this file
- make use of custom middleware
- rewrite comments to posts (it feels strange to let a logged in user perform CRUD actions on anybody's comments :smirk:)
- add link to deployed app on ghpages
