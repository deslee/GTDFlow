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
  DELETE_ITEM: function(id) {
    gtdDispatcher.handleViewAction({
      type: ActionTypes.DELETE_ITEM,
      id: id
    })
  },
  ADD_ITEM: function(name, location) {
    gtdDispatcher.handleViewAction({
      type: ActionTypes.ADD_ITEM,
      name:name,
      location:location
    })
  },

  MOVE_ITEM: function(id, list) {
    gtdDispatcher.handleViewAction({
      type: ActionTypes.MOVE_ITEM,
      id: id,
      location: list
    })
  },

  SET_ITEM_PROJECT: function(id, project) {
    gtdDispatcher.handleViewAction({
      type: ActionTypes.SET_ITEM_PROJECT,
      id: id,
      project: project
    })
  },
  SET_ITEM_NOTES: function(id, notes) {
    gtdDispatcher.handleViewAction({
      type: ActionTypes.SET_ITEM_NOTES,
      id: id,
      notes: notes
    })
  },
  ADD_ACTION_TO_ITEM: function(id, action) {
    gtdDispatcher.handleViewAction({
      type: ActionTypes.ADD_ACTION_TO_ITEM,
      id: id,
      action: action
    })
  },
  DELETE_ACTION_FROM_ITEM: function(id, action) {
    gtdDispatcher.handleViewAction({
      type: ActionTypes.DELETE_ACTION_FROM_ITEM,
      id: id,
      action: action
    })
  },

  /*lists*/
};
