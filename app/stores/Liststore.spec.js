/**
 * Created by desmond on 1/11/15.
 */

describe('List store', function() {
  var ListStore, ListActions, gtdDispatcher, lists;
  ListStore = require('./Liststore.js');
  gtdDispatcher = require('../dispatchers/gtdDispatcher');
  ListActions = require('../actions/ListActions');

  ListStore.addChangeListener(function () {
    lists = ListStore.getItems();
  });

  beforeEach(function () {
    ListStore.reset();
  });

  it('should have zero lists', function () {
    expect(Object.keys(ListStore.getLists()).length).toBe(0);
  });

  it('should be able to add a list', function() {
    ListActions.ADD_LIST("Foo bar");
    expect(Object.keys(ListStore.getLists()).length).toEqual(1)
  });

});
