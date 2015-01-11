/**
 * Created by desmond on 11/27/2014.
 */
var gtdDispatcher = require('../dispatchers/gtdDispatcher')
var gtdConstants = require('../constants/gtdConstants');
var ActionTypes = gtdConstants.ActionTypes;
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');

var CHANGE_EVENT = 'change';

var ListStore = assign({}, EventEmitter.prototype, {
  _lists: {},
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  reset: function() {
    this._lists = {};
  },
  getLists: function() {
    return this._lists;
  }
});

var List = {
  name: null,
  listWidgets: [],
  itemWidgets: []
};

ListStore.dispatchToken = gtdDispatcher.register(function(payload) {
  var action = payload.action;
  switch(action.type) {
    case ActionTypes.ADD_LIST:
      ListStore._lists[action.name] = assign({}, List, {
        name: action.name
      });
          break;
    case ActionTypes.DELETE_LIST:
      delete ListStore._lists[action.name];
          break;

  }
});

module.exports = ListStore;
