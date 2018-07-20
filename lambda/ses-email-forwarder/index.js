var LambdaForwarder = require("aws-lambda-ses-forwarder");

exports.handler = function(event, context, callback) {
  var domain = event.Records[0].ses.receipt.recipients[0].replace(/.*@/, "");
  var overrides = {
    config: {
      fromEmail: `noreply@${domain}`,
      emailBucket: 'email-aldryn-webs',
      emailKeyPrefix: `${domain}/`,
      forwardMapping: {
        "@centralgrab.com": [
          "centralgrab@gmail.com",
          "danielanteloagra@gmail.com"
        ],
        "@madelven.com": [
          "madelvenoficina@gmail.com",
          "danielanteloagra@gmail.com"
        ],
        "@madelven.es": [
          "madelvenoficina@gmail.com",
          "danielanteloagra@gmail.com"
        ],
        "@madelven.net": [
          "madelvenoficina@gmail.com",
          "danielanteloagra@gmail.com"
        ],        
        "@convending.com": [
          "convending@gmail.com",
          "danielanteloagra@gmail.com"
        ]
      }
    }
  };
  LambdaForwarder.handler(event, context, callback, overrides);
};
