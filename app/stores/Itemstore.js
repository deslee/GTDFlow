/**
 * Created by desmond on 11/27/2014.
 */
var gtdDispatcher = require('../dispatchers/gtdDispatcher')
var gtdConstants = require('../constants/gtdConstants');
var ActionTypes = gtdConstants.ActionTypes;
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var moment = require('moment');
var keyMirror = require('keymirror')
var uuid = require('node-uuid');

var ItemActions = require('../actions/ItemActions');
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
    return this._items
//    return _.keys(this._items)
//      .map(function(key) {
//        return this._items[key];
//      }.bind(this));
  },
  findItemByName: function(name) {
    return _.find(this._items, function(item) {
      return item.name == name;
    })
    //return this._items[name];
  },
  findItemById: function(id) {
    return _.find(this._items, function(item) {
      return item.id == id;
    })
  },
  findItemsByProjectName: function(project) {
    return _.where(this._items, function(item) {
      return item.project == project
    });
//    return _.keys(this._items)
//      .filter(function(key) {
//        return this._items[key].project == project
//      }.bind(this))
//      .map(function(key) {
//        return this._items[key];
//      }.bind(this));
  },
  findItemsByLocation: function(location) {
    return _.where(this._items, function(item) {
      return item.location == location;
    });

//    return _.keys(this._items)
//      .filter(function(key) {
//        return this._items[key].location == location
//      }.bind(this))
//      .map(function(key) {
//        return this._items[key];
//      }.bind(this));
  }
});

var Item = {
  id: null,
  name: null,
  location: null,
  project: '',
  notes: '',
  dateAdded: moment(),
  waitingFor: null
};

var Action = {
  name: null,
};

ItemStore.dispatchToken = gtdDispatcher.register(function(payload) {
  var action = payload.action;
  switch(action.type) {
    case ActionTypes.TEST_ACTION:
      console.log('test action');
      ItemStore.emitChange();
      break;

    case ActionTypes.INITIALIZE_ITEM:
      //if (ItemStore.findItemByName(action.name)) {
      //  throw "Can't have two items with the same name!";
      //}
      action.item.id = uuid.v4();
      ItemStore._items.push(assign({actions: []}, Item, action.item));
      //ItemStore._items[action.item.name] = assign({actions: []}, Item, action.item);
      ItemStore.emitChange();
      break;


    case ActionTypes.ADD_ITEM:
      if (!action.name) {
        throw "Can't add an item with no name";
      }

      //if (ItemStore.findItemByName(action.name)) {
      //  throw "Can't have two items with the same name!";
      //}

      var item = assign({actions: []}, Item, {
        id: uuid.v4(),
        name: action.name,
        location: action.location,
        dateAdded: moment()
      });

      ItemStore._items.push(item);
      // ItemStore._items[action.name] = item;

      ItemStore.emitChange();
      break;

    case ActionTypes.DELETE_ITEM:
      _.remove(ItemStore._items, function(item) {
        return item.id == action.id
      })
      //delete ItemStore._items[action.name];
      ItemStore.emitChange();
      break;

    case ActionTypes.ADD_ACTION_TO_ITEM:
      var item = ItemStore.findItemById(action.id);

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
      var item = ItemStore.findItemById(action.id);

      _.remove(item.actions, function(a) {
        return a.name == action.action;
      })
      ItemStore.emitChange();
      break;

    case ActionTypes.SET_ITEM_PROJECT:
      var item = ItemStore.findItemById(action.id);
      item.project = action.project;
      ItemStore.emitChange();
      break;

    case ActionTypes.SET_ITEM_NOTES:
      var item = ItemStore.findItemById(action.id);
      item.notes = action.notes;
      ItemStore.emitChange();
      break;

    case ActionTypes.MOVE_ITEM:
      var item = ItemStore.findItemById(action.id);
      item.location = action.location;
      ItemStore.emitChange();
      break;
  }
});

module.exports = ItemStore;
