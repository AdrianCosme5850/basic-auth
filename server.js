'use strict';

const express = require('express');
const handleSignIn = require('./auth/signIn');
const handleSignUp = require('./auth/signUp');
const basicAuth = require('./auth/basicAuth');


const app = express();

app.use(express.json());

// Signup Route -- create a new user
// Two ways to test this route with httpie
// echo '{"username":"john","password":"foo"}' | http post :3000/signup
// http post :3000/signup username=john password=foo

app.post('/signup', handleSignUp);

  
// Signin Route -- login with username and password
// test with httpie
// http post :3000/signin -a john:foo


  app.post('/signin', basicAuth, handleSignIn);
  app.use(express.urlencoded({ extended: true }));

  module.exports = {
    start: (port) => {
        app.listen(port, () => {
            console.log('listnening on ' + port)
        })
    }, app
  }