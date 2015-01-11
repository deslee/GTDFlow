/**
 * Created by desmond on 11/27/2014.
 */

describe('Item store', function() {
  var ItemStore, ItemActions, gtdDispatcher, items;
  ItemStore = require('./Itemstore.js');
  gtdDispatcher = require('../dispatchers/gtdDispatcher');
  ItemActions = require('../actions/ItemActions');

  ItemStore.addChangeListener(function() {
    items = ItemStore.getItems();
  });

  beforeEach(function() {
    ItemStore.reset();
  });

  it('should have zero items', function() {
    expect(ItemStore.getItems().length).toBe(0);
  });

  describe('With one item', function() {
    var item_name = 'See Interstella';
    beforeEach(function() {
      ItemActions.ADD_ITEM(item_name, "In List");
    });

    it('should have one item', function() {
      expect(items.length).toBe(1);
    });

    it('should not allow you to have two items with the same name', function() {
      expect(function() {
        ItemActions.ADD_ITEM(item_name);
      }).toThrow("Can't have two items with the same name!");
    });

    it('should not allow you to add an item with no name', function() {
      expect(function() {
        ItemActions.ADD_ITEM('');
      }).toThrow("Can't add an item with no name");
    });

    it('should have a location of In List', function() {
      expect(items[0].location).toBe("In List");
    });

    it('should allow you to remove an item', function() {
      ItemActions.DELETE_ITEM(item_name);
      expect(items.length).toBe(0);
    });

    describe('an item with an action', function() {
      var action_name = "Check showtimes online";
      beforeEach(function() {
        ItemActions.ADD_ACTION_TO_ITEM(item_name, action_name);
      });

      it('should have one action in the item', function() {
        expect(items[0].actions.length).toBe(1);
        expect(items[0].actions[0].name).toBe(action_name);
      });

      it('should not allow two actions with the same name', function() {
        expect(function() {
          ItemActions.ADD_ACTION_TO_ITEM(item_name, action_name);
        }).toThrow("Can't have two actions in an item with the same name!");
      });

      it('should not allow you to add an action with no name', function() {
        expect(function() {
          ItemActions.ADD_ACTION_TO_ITEM(item_name, '');
        }).toThrow("Can't add an action with no name");
      });

      it('should let you remove an action from an item', function() {
        ItemActions.DELETE_ACTION_FROM_ITEM(item_name, action_name);
        expect(items[0].actions.length).toBe(0);
      })
    });

    describe('moving locations', function() {
      it('should be able to move to another list', function() {
        ItemActions.MOVE_ITEM(item_name, 'foobar');
        expect(items[0].location).toBe('foobar');
        expect(ItemStore.findItemsByLocation('foobar').length).toBe(1);
      });
    })

    var project_name = 'Understand Film';
    var notes = "Hello world!"
    describe('setting metadata', function() {
      it('should let you set the project', function() {
        ItemActions.SET_ITEM_PROJECT(item_name, project_name);
        expect(items[0].project).toBe(project_name)
        var results = ItemStore.findItemsByProjectName(project_name);
        expect(results.length).toBe(1);
        expect(results[0].name).toBe(item_name);
      });

      it('should let you set the notes', function() {
        ItemActions.SET_ITEM_NOTES(item_name, notes);
        expect(items[0].notes).toBe(notes)
      })
    })
  })

});
