/**
 * Created by desmond on 11/27/2014.
 */

describe('Item store', function() {
  var ItemStore, ItemActions, ItemLocations, gtdDispatcher;
  beforeEach(function() {
    gtdDispatcher = require('../dispatchers/gtdDispatcher');
    ItemStore = require('./itemstore.js');
    ItemActions = require('../actions/ItemActions');
    ItemLocations = require('../constants/gtdConstants').ItemLocations;
    ItemStore.reset();
  });

  it('should have zero items', function() {
    expect(ItemStore.getItems().length).toBe(0);
  });

  describe('With one item', function() {
    var item_name = 'See Interstella';
    var items = null;
    beforeEach(function() {
      items = null;
      ItemStore.addChangeListener(function() {
        items = ItemStore.getItems();
      });
      ItemActions.add_item(item_name);
    });

    it('should have one item', function() {
      expect(items.length).toBe(1);
    });

    it('should not allow you to have two items with the same name', function() {
      expect(function() {
        ItemActions.add_item(item_name);
      }).toThrow("Can't have two items with the same name!");
    });

    it('should have a location of IN_LIST', function() {
      expect(items[0].location).toBe(ItemLocations.IN_LIST);
    });

    it('should allow you to remove an item', function() {
      ItemActions.delete_item(item_name);
      expect(items.length).toBe(0);
    });

    describe('an item with an action', function() {
      var action_name = "Check showtimes online";
      it('should have one action in the item', function() {
        ItemActions.add_action(item_name, action_name);
        expect(items[0].actions.length).toBe(1);
        expect(items[0].actions[0].name).toBe(action_name);
      });

      it('should not allow two actions with the same name', function() {
        expect(function() {
          ItemActions.add_action(item_name, action_name);
        }).toThrow("Can't have two actions in an item with the same name!");
      })

      it('should let you remove an action from an item', function() {
        ItemActions.delete_action(item_name, action_name);
        expect(items[0].actions.length).toBe(0);
      })
    })
  })
});
