'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('wanted service', function() {
  it('registered the wanteds service', () => {
    assert.ok(app.service('wanteds'));
  });
});
