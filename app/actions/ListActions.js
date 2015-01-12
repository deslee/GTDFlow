/**
 * Created by desmond on 11/27/2014.
 */
var gtdDispatcher = require('../dispatchers/gtdDispatcher');
var gtdConstants = require('../constants/gtdConstants');
var ActionTypes = gtdConstants.ActionTypes;

module.exports = {
  ADD_LIST: function(name) {
    gtdDispatcher.handleViewAction({
      type: ActionTypes.ADD_LIST,
      name: name
    });
  },

  DELETE_LIST: function(name) {
    gtdDispatcher.handleViewAction({
      type: ActionTypes.DELETE_LIST,
      name: name
    });
  },

  ADD_WIDGET_TO_LIST: function(name, widget) {
    gtdDispatcher.handleViewAction({
      type: ActionTypes.ADD_WIDGET_TO_LIST,
      name: name,
      widget: widget
    })
  }

};
