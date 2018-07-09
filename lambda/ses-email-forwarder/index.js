var LambdaForwarder = require("aws-lambda-ses-forwarder");

exports.handler = function(event, context, callback) {
  var domain = event.Records[0].ses.receipt.recipients[0].replace(/.*@/, "");
  var overrides = {
    config: {
      fromEmail: `noreply@${domain}`,
      emailBucket: 'email-aldryn-webs',
      emailKeyPrefix: `${domain}/`,
      forwardMapping: {
        "contacto@centralgrab.com": [
          "centralgrab@gmail.com",
          "danielanteloagra@gmail.com"
        ],
        "info@centralgrab.com": [
          "centralgrab@gmail.com",
          "danielanteloagra@gmail.com"
        ],
        "contacto@madelven.com": [
          "madelvenoficina@gmail.com",
          "danielanteloagra@gmail.com"
        ],
        "info@madelven.com": [
          "madelvenoficina@gmail.com",
          "danielanteloagra@gmail.com"
        ],
        "contacto@convending.com": [
          "convending@gmail.com",
          "danielanteloagra@gmail.com"
        ],
        "info@convending.com": [
          "convending@gmail.com",
          "danielanteloagra@gmail.com"
        ]
      }
    }
  };
  LambdaForwarder.handler(event, context, callback, overrides);
};
