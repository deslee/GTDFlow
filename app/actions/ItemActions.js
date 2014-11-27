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
  },

  incubate: function(name) {
    gtdDispatcher.handleViewAction({
      type: ActionTypes.INCUBATE_ITEM,
      name: name
    });
  },

  move_next_actions: function(name) {
    gtdDispatcher.handleViewAction({
      type: ActionTypes.MOVE_ITEM_TO_NEXT_ACTIONS_LIST,
      name: name
    })
  },

  move_someday_maybe: function(name) {
    gtdDispatcher.handleViewAction({
      type: ActionTypes.MOVE_ITEM_TO_SOMEDAY_MAYBE_LIST,
      name: name
    })
  },

  move_in_list: function(name) {
    gtdDispatcher.handleViewAction({
      type: ActionTypes.MOVE_ITEM_TO_IN_LIST,
      name: name
    })
  },

  move_waiting: function(name, waiting_on) {
    gtdDispatcher.handleViewAction({
      type: ActionTypes.MOVE_ITEM_TO_WAITING_LIST,
      name: name,
      waiting_on: waiting_on
    })
  },

  move_references: function(name) {
    gtdDispatcher.handleViewAction({
      type: ActionTypes.MOVE_ITEM_TO_REFERENCES_LIST,
      name: name
    })
  },

  set_project: function(name, project) {
    gtdDispatcher.handleViewAction({
      type: ActionTypes.SET_ITEM_PROJECT,
      name: name,
      project: project
    })
  },

  set_notes: function(name, notes) {
    gtdDispatcher.handleViewAction({
      type: ActionTypes.SET_ITEM_NOTES,
      name: name,
      notes: notes
    })
  },

  add_action: function(name, action) {
    gtdDispatcher.handleViewAction({
      type: ActionTypes.ADD_ACTION_TO_ITEM,
      name: name,
      action: action
    })
  },

  delete_action: function(name, action) {
    gtdDispatcher.handleViewAction({
      type: ActionTypes.DELETE_ACTION_FROM_ITEM,
      name: name,
      action: action
    })
  },

  initialize: function(item) {
    gtdDispatcher.handleViewAction({
      type: ActionTypes.INITIALIZE_ITEM,
      item: item
    })
  },

  add_item: function(name) {
    gtdDispatcher.handleViewAction({
      type: ActionTypes.ADD_ITEM,
      name:name
    })
  },

  delete_item: function(name) {
    gtdDispatcher.handleViewAction({
      type: ActionTypes.DELETE_ITEM,
      name: name
    })
  }
};
/*

INCUBATE_ITEM: null,

  MOVE_ITEM_TO_NEXT_ACTIONS_LIST: null,
  MOVE_ITEM_TO_SOMEDAY_MAYBE_LIST: null,
  MOVE_ITEM_TO_WAITING_LIST: null,
  MOVE_ITEM_TO_REFERENCES_LIST: null,

  SET_ITEM_PROJECT: null,
  SET_ITEM_NOTES: null,
  ADD_ACTION_TO_ITEM: null,
  DELETE_ACTION_FROM_ITEM: null*/
