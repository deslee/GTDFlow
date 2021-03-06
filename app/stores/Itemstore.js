/**
 * Created by desmond on 11/27/2014.
 */
var gtdDispatcher = require('../dispatchers/gtdDispatcher')
var gtdConstants = require('../constants/gtdConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var ItemLocations = gtdConstants.ItemLocations;
var _ = require('lodash');
var moment = require('moment');

var ActionTypes = gtdConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var ItemStore = assign({}, EventEmitter.prototype, {
  _items: {},
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
    this._items = {};
  },
  getItems: function() {
    return _.keys(this._items)
      .map(function(key) {
        return this._items[key];
      }.bind(this));
  },
  findItemByName: function(name) {
    return this._items[name];
  },
  findItemsByProjectName: function(project) {
    return _.keys(this._items)
      .filter(function(key) {
        return this._items[key].project == project
      }.bind(this))
      .map(function(key) {
        return this._items[key];
      }.bind(this));
  },
  findItemsByLocation: function(location) {
    return _.keys(this._items)
      .filter(function(key) {
        return this._items[key].location == location
      }.bind(this))
      .map(function(key) {
        return this._items[key];
      }.bind(this));
  }
});

var Item = {
  name: null,
  location: ItemLocations.IN_LIST,
  project: '',
  notes: '',
  dateAdded: moment(),
  waitingFor: null
};

var Action = {
  name: null,
};

console.log('registering itemstore to dispatcher')
ItemStore.dispatchToken = gtdDispatcher.register(function(payload) {
  var action = payload.action;
  switch(action.type) {
    case ActionTypes.TEST_ACTION:
      console.log('test');
      ItemStore.emitChange();
      break;

    case ActionTypes.INITIALIZE_ITEM:
      if (ItemStore.findItemByName(action.name)) {
        throw "Can't have two items with the same name!";
      }
      ItemStore._items[action.item.name] = assign({actions: []}, Item, action.item);
      ItemStore.emitChange();
      break;


    case ActionTypes.ADD_ITEM:
      if (!action.name) {
        throw "Can't add an item with no name";
      }

      if (ItemStore.findItemByName(action.name)) {
        throw "Can't have two items with the same name!";
      }


      ItemStore._items[action.name] = assign({actions: []}, Item, {
        name: action.name,
        location: action.location,
        dateAdded: moment()
      });

      ItemStore.emitChange();
      break;

    case ActionTypes.DELETE_ITEM:
      delete ItemStore._items[action.name];
      ItemStore.emitChange();
      break;

    case ActionTypes.ADD_ACTION_TO_ITEM:
      var item = ItemStore.findItemByName(action.name);

      if (!action.action) {
        throw "Can't add an action with no name";
      }

      if (_.find(item.actions, function(a) {
          return a.name == action.action;
        })) {
        throw "Can't have two actions in an item with the same name!";
      }

      item.actions.push(assign({}, Action, {
        name: action.action
      }));

      ItemStore.emitChange();
      break;

    case ActionTypes.DELETE_ACTION_FROM_ITEM:
      var item = ItemStore.findItemByName(action.name);

      _.remove(item.actions, function(a) {
        return a.name == action.action;
      })
      ItemStore.emitChange();
      break;

    case ActionTypes.SET_ITEM_PROJECT:
      var item = ItemStore.findItemByName(action.name);
      item.project = action.project;
      ItemStore.emitChange();
      break;

    case ActionTypes.SET_ITEM_NOTES:
      var item = ItemStore.findItemByName(action.name);
      item.notes = action.notes;
      ItemStore.emitChange();
      break;

    case ActionTypes.MOVE_ITEM_TO_NEXT_ACTIONS_LIST:
      var item = ItemStore.findItemByName(action.name);
      item.location = ItemLocations.NEXT_ACTIONS;
      ItemStore.emitChange();
      break;


    case ActionTypes.MOVE_ITEM_TO_IN_LIST:
      var item = ItemStore.findItemByName(action.name);
      item.location = ItemLocations.IN_LIST;
      ItemStore.emitChange();
      break;

    case ActionTypes.MOVE_ITEM_TO_REFERENCES_LIST:
      var item = ItemStore.findItemByName(action.name);
      item.location = ItemLocations.REFERENCES;
      ItemStore.emitChange();
      break;

    case ActionTypes.MOVE_ITEM_TO_SOMEDAY_MAYBE_LIST:
      var item = ItemStore.findItemByName(action.name);
      item.location = ItemLocations.SOMEDAY_MAYBE;
      ItemStore.emitChange();
      break;

    case ActionTypes.MOVE_ITEM_TO_WAITING_LIST:
      var item = ItemStore.findItemByName(action.name);
      item.location = ItemLocations.WAITING;
      item.waitingFor = action.waiting_on;
      ItemStore.emitChange();
      break;
  }
});

module.exports = ItemStore;
