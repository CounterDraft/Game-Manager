var env = process.env.NODE_ENV;
var mix = require('mix-into');
var config = {};

// Setup the configuration
try {
    var local_config = require('../config/local_config');
    config = mix(require('../config/master_config'))
        .into(require('../config/local_config'));
} catch (err) {
    console.error('No local configurations found in config/ Error=' + JSON.stringify(err));
    config = require('../config/master_config');
}
process.exit(1);
