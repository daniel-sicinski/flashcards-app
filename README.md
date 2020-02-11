# Flashcards App

This app provides a set of English words and sentences, with its Polish translations, in a form that facilitates learning them.

The app was created for my mom, who is learning English. The goal of this project was to convert a desktop app used by my mom for learning English, to a mobile version, with the most important feature being ability to listen to audio on the smartphone.

The app is designed with a mobile-first approach. The interface of the app is in Polish.

Link to a live demo:
https://stormy-beyond-12223.herokuapp.com/


## Implemented functionalities

* reviewing a list of English/Polish expressions (in a form of cards)
* playling audio for each card, for all cards and for selected cards
* creating, updating, deleting, and reviewing playlists of selected cards
* authentication and individual accounts
* PWA - installability, ability to use most of the app features offline

## Future functionalities

* cards search feature
* reviewing all cards grouped by category
* ability to change settings of audio playback (i.e. longer breakes between played tracks)
* adding some kind of tests for practicing expressions

## Technologies used

* Node
* Express
* Mongo
* Mongoose
* React
* React-Router
* Redux
* Redux-Saga
* Webpack
* SASS
* MaterialUI

### Installing

* Clone repo
* In directory with cloned repo run 'npm install'
* To run development version of app run 'npm run start:dev'
* To run production version of app run 'npm run build' followed by 'npm run start'
