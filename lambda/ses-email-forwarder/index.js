var LambdaForwarder = require("aws-lambda-ses-forwarder");

exports.handler = function(event, context, callback) {
  var domain = event.Records[0].ses.receipt.recipients[0].replace(/.*@/, "");
  var overrides = {
    config: {
      fromEmail: `noreply@${domain}`,
      emailBucket: 'email-aldryn-webs',
      emailKeyPrefix: `${domain}/`,
      forwardMapping: {
        "error@centralgrab.com": [
          "danielanteloagra@gmail.com"
        ],
        "error@madelven.com": [
          "danielanteloagra@gmail.com"
        ],
        "error@convending.com": [
          "danielanteloagra@gmail.com"
        ],

        "@centralgrab.com": [
          "centralgrab@gmail.com"
        ],
        "@madelven.com": [
          "madelvenoficina@gmail.com"
        ],
        "@madelven.es": [
          "madelvenoficina@gmail.com"
        ],
        "@madelven.net": [
          "madelvenoficina@gmail.com"
        ],        
        "@convending.com": [
          "convending@gmail.com"
        ]
      }
    }
  };
  LambdaForwarder.handler(event, context, callback, overrides);
};
