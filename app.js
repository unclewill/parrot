
'use strict';

//process.env.DEBUG = 'actions-on-google:*';
var http = require('http');
var ActionsSdkApp = require('actions-on-google').ActionsSdkApp;
var express = require('express');
var expressApp = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;
var SCHEDULE_QUERY = 'your_domain_goes.here.SCHEDULE_QUERY';

function handlePost(request, response)
{
 var app, actions;

 // Javascript assistant API 

 app = new ActionsSdkApp( {request: request, response: response} );

 // Our intent to handler mapping

 actions = new Map();
 actions.set(SCHEDULE_QUERY,           queryIntent);
 actions.set(app.StandardIntents.MAIN, mainIntent);
 actions.set(app.StandardIntents.TEXT, textIntent);
 app.handleRequest(actions);

 // Handles the main intent

 function mainIntent(app)
 {
  app.ask('Polly want a cracker');
 }

 // Handles the query intent - i.e. user has specified a route at minimum

 function queryIntent(app)
 {
 }

 // Handles the text intent

 function textIntent(app)
 {
  var text;

  text = app.getRawInput() || '';
  app.ask(text);
 }
}

// start the web server

expressApp.set('port', port);
expressApp.use( bodyParser.json( {type: 'application/json'} ) );

expressApp.post('/', handlePost);

expressApp.listen(port);
console.log('Parrot Assistant listening on port %s', port);

module.exports = expressApp;