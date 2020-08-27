
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/monitor-new.min.js');
} else {
  module.exports = require('./dist/monitor-new.js');
}