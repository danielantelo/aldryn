const Encore = require('@symfony/webpack-encore');

Encore
    // the project directory where all compiled assets will be stored
    .setOutputPath('web/build/')

    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')

    // will create web/build/app.js
    .addEntry('app', './app/Resources/assets/js/app.js')

    .addStyleEntry('centralgrab.com', './app/Resources/assets/css/centralgrab.com.scss')
    .addStyleEntry('madelven.com', './app/Resources/assets/css/madelven.com.scss')
    .addStyleEntry('convending.com', './app/Resources/assets/css/convending.com.scss')

    // allow sass/scss files to be processed
    .enableSassLoader()

    .enableSourceMaps(!Encore.isProduction())

    // empty the outputPath dir before each build
    .cleanupOutputBeforeBuild()

    // create hashed filenames (e.g. app.abc123.css)
    .enableVersioning()
;

module.exports = Encore.getWebpackConfig();
