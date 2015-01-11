/**
 * Created by desmond on 11/27/2014.
 */
var gtdDispatcher = require('../dispatchers/gtdDispatcher');
var gtdConstants = require('../constants/gtdConstants');
var ActionTypes = gtdConstants.ActionTypes;

module.exports = {
  TEST_ACTION: function() {
    gtdDispatcher.handleViewAction({
      type: ActionTypes.TEST_ACTION
    });
  },
  DELETE_ITEM: function(name) {
    gtdDispatcher.handleViewAction({
      type: ActionTypes.DELETE_ITEM,
      name: name
    })
  },
  ADD_ITEM: function(name, location) {
    gtdDispatcher.handleViewAction({
      type: ActionTypes.ADD_ITEM,
      name:name,
      location:location
    })
  },

  MOVE_ITEM: function(name, list) {
    gtdDispatcher.handleViewAction({
      type: ActionTypes.MOVE_ITEM,
      name: name,
      location: list
    })
  },

  SET_ITEM_PROJECT: function(name, project) {
    gtdDispatcher.handleViewAction({
      type: ActionTypes.SET_ITEM_PROJECT,
      name: name,
      project: project
    })
  },
  SET_ITEM_NOTES: function(name, notes) {
    gtdDispatcher.handleViewAction({
      type: ActionTypes.SET_ITEM_NOTES,
      name: name,
      notes: notes
    })
  },
  ADD_ACTION_TO_ITEM: function(name, action) {
    gtdDispatcher.handleViewAction({
      type: ActionTypes.ADD_ACTION_TO_ITEM,
      name: name,
      action: action
    })
  },
  DELETE_ACTION_FROM_ITEM: function(name, action) {
    gtdDispatcher.handleViewAction({
      type: ActionTypes.DELETE_ACTION_FROM_ITEM,
      name: name,
      action: action
    })
  },

  /*lists*/
};
