'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app'),
  writeFile = require('broccoli-file-creator'), //dependency for creating file and crating hash
  md5 = require('md5')


module.exports = function (defaults) {
  const fingerprintHash = md5(Date.now()); //hash for all reasources based on date

  let app = new EmberApp(defaults, {
    //ember-bootstrap addon configuation could go here
    fingerprint: {
      extensions: ['js', 'css', 'png', 'jpg', 'gif', 'map', 'json', ], // list of extensions to fingerprint
      customHash: fingerprintHash //use a single fingeprint/hash for all assets
    }
  });

  var assetFingerprintTree = writeFile('./assets/assets-fingerprint.js', `(function(_window){"use strict";_window.ASSET_FINGERPRINT_HASH="${(app.env === 'production' ? `-${fingerprintHash}` : '')}"})(window)`);

  // Use `app.import` to add additional librarißes to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree(assetFingerprintTree); //include the hash file in the build

};
