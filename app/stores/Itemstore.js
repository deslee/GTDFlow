/**
 * Created by desmond on 11/27/2014.
 */
var gtdDispatcher = require('../dispatchers/gtdDispatcher')
var gtdConstants = require('../constants/gtdConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');

var ActionTypes = gtdConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var ItemStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

ItemStore.dispatchToken = gtdDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {
    case ActionTypes.TEST_ACTION:
          console.log('test');
          break;
    case ActionTypes.DELETE_ITEM:
          _.find()
    default:
          //do nothing
          break;
  }
});

module.exports = ItemStore;
