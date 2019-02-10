# CRUD-Posts-with-GAuth

A basic app with custom API allowing logged in users to perform CRUD actions on a list of dummy posts

## Posts basic CRUD app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The technology stack includes **React**, **React-Router-DOM**, **Redux**, **Redux-Form** and **Redux-Thunk**.

Custom API is created with the use of [json-server](https://github.com/typicode/json-server) and data is kept internally in `db.json` file.

## Setting up

The project contains two main directories, one for the client and another for api.
To boot it you should run `npm install` in both `api` and `client` directories and run them simultaneously in separate terminal windows using `npm start` command. The client will then run on `http://localhost:3000` and the API on `http://localhost:3001`.

## Google Auth

The client app users [Google APIs Client Library](https://developers.google.com/api-client-library/javascript/reference/referencedocs) for authentication. Once a user is logged in, they can perform CRUD operations on posts data.

In order for this to work, the `.env.example` file in the `client` root directory has to be overwritten to `.env` and the relevant OAuth key has to be added.

## json-server API

The custom API data can be changed manually in the `api/db.json` file. The base for the file is kept in a backup file `api/db_basic.json`

### To do:

- update tests
- describe stack and usage (Jest, Enzyme) in this file
- add link to deployed app on ghpages
