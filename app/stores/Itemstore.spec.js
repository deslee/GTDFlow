/**
 * Created by desmond on 11/27/2014.
 */

describe('Item store', function() {
  var ItemStore, ItemActions, ItemLocations, gtdDispatcher, items;
  ItemStore = require('./itemstore.js');
  gtdDispatcher = require('../dispatchers/gtdDispatcher');
  ItemActions = require('../actions/ItemActions');
  ItemLocations = require('../constants/gtdConstants').ItemLocations;

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
    });

    describe('moving locations', function() {
      it('should be able to move to the next actions list', function() {
        ItemActions.move_next_actions(item_name);
        expect(items[0].location).toBe(ItemLocations.NEXT_ACTIONS);
        expect(ItemStore.findItemsByLocation(ItemLocations.NEXT_ACTIONS).length).toBe(1);
      });
      it('should be able to move to the someday / maybe list', function() {
        ItemActions.move_someday_maybe(item_name);
        expect(items[0].location).toBe(ItemLocations.SOMEDAY_MAYBE);
        expect(ItemStore.findItemsByLocation(ItemLocations.SOMEDAY_MAYBE).length).toBe(1);
      });
      it('should be able to move to the waiting list', function() {
        ItemActions.move_waiting(item_name);
        expect(items[0].location).toBe(ItemLocations.WAITING);
        expect(ItemStore.findItemsByLocation(ItemLocations.WAITING).length).toBe(1);
      });
      it('should be able to move to the references list', function() {
        ItemActions.move_references(item_name);
        expect(items[0].location).toBe(ItemLocations.REFERENCES);
        expect(ItemStore.findItemsByLocation(ItemLocations.REFERENCES).length).toBe(1);
      });
      it('should be able to move to the in list list', function() {
        ItemActions.move_in_list(item_name);
        expect(items[0].location).toBe(ItemLocations.IN_LIST);
        expect(ItemStore.findItemsByLocation(ItemLocations.IN_LIST).length).toBe(1);
      });
    })

    var project_name = 'Understand Film';
    var notes = "Hello world!"
    describe('setting metadata', function() {
      it('should let you set the project', function() {
        ItemActions.set_project(item_name, project_name);
        expect(items[0].project).toBe(project_name)
        var results = ItemStore.findItemsByProjectName(project_name);
        expect(results.length).toBe(1);
        expect(results[0].name).toBe(item_name);
      });

      it('should let you set the notes', function() {
        ItemActions.set_notes(item_name, notes);
        expect(items[0].notes).toBe(notes)
      })
    })
  })
});
