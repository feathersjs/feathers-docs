'use strict';

const assert = require('assert');
const populateTeams = require('../../src/hooks/populate-teams');

describe('\'populateTeams\' hook', () => {
  it('runs the hook', () => {
    // A mock context object
    const mock = {};
    // Initialize our hook with no options
    const hook = populateTeams();

    // Run the hook function (which returns a promise)
    // and compare the resulting context object
    return hook(mock).then(result => {
      assert.equal(result, mock, 'Returns the expected context object');
    });
  });
});
