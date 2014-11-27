/**
 * Created by desmond on 11/27/2014.
 */
var gtdDispatcher = require('../dispatchers/gtdDispatcher')
var gtdConstants = require('../constants/gtdConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var ItemLocations = gtdConstants.ItemLocations;
var _ = require('lodash');

var ActionTypes = gtdConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var ItemStore = assign({}, EventEmitter.prototype, {
  _items: [],
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
    this._items = [];
  },
  getItems: function() {
    return this._items;
  },
  findItemByName: function(name) {
    return _.find(this._items, function(item) {
      return item.name == name
    });
  }
});

var Item = {
  name: null,
  location: ItemLocations.IN_LIST,
  actions: []
};

var Action = {
  name: null,
};

ItemStore.dispatchToken = gtdDispatcher.register(function(payload) {
  var action = payload.action;
  switch(action.type) {
    case ActionTypes.TEST_ACTION:
          console.log('test');
          ItemStore.emitChange();
          break;
    case ActionTypes.ADD_ITEM:
      if (ItemStore.findItemByName(action.name)) {
        throw "Can't have two items with the same name!";
      }

      ItemStore._items.push(assign({}, Item, {
        name: action.name,
        location: ItemLocations.IN_LIST
      }));
      ItemStore.emitChange();
          break;
    case ActionTypes.DELETE_ITEM:
        _.remove(ItemStore._items, function(item) {
          return item.name == action.name;
        });
        ItemStore.emitChange();
          break;
    case ActionTypes.ADD_ACTION_TO_ITEM:
          var item = ItemStore.findItemByName(action.name);
          if (_.find(item.actions, function(a) {
            return a.name == action.action;
          })) {
          throw "Can't have two actions in an item with the same name!";
          }

          item.actions.push(assign({}, Action, {
            name: action.action
          }));
      break;
      case ActionTypes.DELETE_ACTION_FROM_ITEM:
        var item = ItemStore.findItemByName(action.name);
        _.remove(item.actions, function(a) {
          return a.name == action.action;
        })
      ItemStore.emitChange();
  }
});

module.exports = ItemStore;
