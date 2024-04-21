const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys')

const app = express();

//  app.get('/', (req, res) => {
//     res.send('Hello World!')
//  })

passport.use(
   new GoogleStrategy(
      {
         clientID: keys.googleClientId,
         clientSecret: keys.googleClientSecret,
         callbackURL: '/auth/google/callback'
      }, (accessToken, refreshToken, profile, done) => {
         console.log(accessToken)
         console.log(refreshToken)
         console.log(profile)
      }
   )
);

app.get(
   '/auth/google', 
   passport.authenticate('google', {
      scope: ['profile', 'email']
   })
);

app.get('/auth/google/callback', passport.authenticate('google'));
const PORT = process.env.PORT || '5001';

app.listen(PORT);