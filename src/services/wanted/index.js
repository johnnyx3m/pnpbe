'use strict';

const service = require('feathers-mongoose');
const wanted = require('./wanted-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: wanted,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/wanteds', service(options));

  // Get our initialize service to that we can bind hooks
  const wantedService = app.service('/wanteds');

  // Set up our before hooks
  wantedService.before(hooks.before);

  // Set up our after hooks
  wantedService.after(hooks.after);
};
