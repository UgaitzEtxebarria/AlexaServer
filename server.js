'use strict';

/*var AlexaAppServer = require( 'alexa-app-server' );

var server = new AlexaAppServer( {
	appdir = "apps",
	httpsEnabled: false,
	port: process.env.PORT || 80
} );

server.start();*/

var AlexaAppServer = require('alexa-app-server');
 
var instance = AlexaAppServer.start({
  server_root: __dirname,     // Path to root
  public_html: "public_html", // Static content
  app_dir: "apps",            // Location of alexa-app modules
  app_root: "/alexa/",        // Service root
  port: 8080                  // Port to use
});
 
//instance.stop();              // Stop the server