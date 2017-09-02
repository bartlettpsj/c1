const _ = require('lodash');

const constants = {
    Modes: {
      cropSignature:      0,
      formScan:           1,
      formAndCrop:        2,
      templateDefinition: 3,
      batchScan:          [4,5,6]
    }
  };

  var f = constants.Modes.formScan;
  var b = constants.Modes.batchScan;

  console.log(f);
  console.log(b);

  var r = _.find(constants.Modes, 'formAndCrop');
  console.log('Found: ', r);
  var x = _.identity(constants.Modes, 3);
  console.log('Got ', x);
  var k = _.findKey(constants.Modes, 'formAndCrop');
  console.log('The Key:', k);