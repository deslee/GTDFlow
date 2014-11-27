var gtdDispatcher = require('./gtdDispatcher');
var ItemActions = require('../actions/ItemActions');

describe('gtdDispatcher', function() {
  it('should pass!', function() {
    expect(true).toBe(true);
  });

  it('should respond to a test action', function() {
    var called = false;
    gtdDispatcher.register(function() {
      called = true;
    });
    ItemActions.testAction();
    expect(called).toBe(true);
  })
});

module.exports = []
