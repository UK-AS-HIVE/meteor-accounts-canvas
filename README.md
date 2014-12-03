meteor-accounts-canvas
======================
A login service for a Canvas LMS. 

###Installation###
For now, this package will need to be cloned and added to your project manually:
* mkdir -p packages
* git clone https://github.com/UK-AS-HIVE/meteor-accounts-canvas packages/hive:accounts-canvas
* meteor add hive:accounts-canvas

##Usage##
The standard `{{> loginButtons}}` template from accounts-ui will now include a "Login with Canvas" option. On first run, this should default to "Configure Canvas login", which will allow you to enter the URL of the Canvas installation you're trying to authenticate with, as well as your Tool ID and Key (sometimes referred to as Client ID and Client Secret). 

NOTE: If you're trying to configure Canvas login in an environment with a self-signed certificate, you'll need to add 
`process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"`
somewhere in your app. 

##License##
MIT.

