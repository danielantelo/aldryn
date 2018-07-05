var LambdaForwarder = require("aws-lambda-ses-forwarder");

exports.handler = function(event, context, callback) {
  var domain = 'centralgrab.com';
  var overrides = {
    config: {
      fromEmail: `noreply@${domain}`,
      emailBucket: 'email-aldryn-webs',
      emailKeyPrefix: `${domain}/`,
      forwardMapping: {
        "contacto@centralgrab.com": [
          "centralgrab@gmail.com"
        ]
      }
    }
  };
  LambdaForwarder.handler(event, context, callback, overrides);
};
