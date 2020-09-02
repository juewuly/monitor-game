
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/monitor-game.min.js');
} else {
  module.exports = require('./dist/monitor-game.js');
}