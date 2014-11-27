/**
 * Created by desmond on 11/27/2014.
 */
var gtdDispatcher = require('../dispatchers/gtdDispatcher');
var gtdConstants = require('../constants/gtdConstants');
var ActionTypes = gtdConstants.ActionTypes;

module.exports = {
  testAction: function() {
    gtdDispatcher.handleViewAction({
      type: ActionTypes.TEST_ACTION
    });
  }
}
