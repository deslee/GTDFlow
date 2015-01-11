var keyMirror = require('keymirror');

module.exports = {
  ActionTypes: keyMirror({
    TEST_ACTION: null,
    DELETE_ITEM: null,
    ADD_ITEM: null,

    INCUBATE_ITEM: null,
    MOVE_ITEM_TO_NEXT_ACTIONS_LIST: null,
    MOVE_ITEM_TO_SOMEDAY_MAYBE_LIST: null,
    MOVE_ITEM_TO_IN_LIST: null,
    MOVE_ITEM_TO_WAITING_LIST: null,
    MOVE_ITEM_TO_REFERENCES_LIST: null,

    SET_ITEM_PROJECT: null,
    SET_ITEM_NOTES: null,
    ADD_ACTION_TO_ITEM: null,
    DELETE_ACTION_FROM_ITEM: null,

    INITIALIZE_ITEM: null,


    /*lists*/

    ADD_LIST: null,
    DELETE_LIST: null

  }),

  PayloadSources: keyMirror({
    VIEW_ACTION: null
  }),

  ListWidgets: keyMirror({
    QUICK_ADD: null
  }),

  ItemWidgets: keyMirror({
    NOTES: null,
    MOVE_TO_LIST: null,
  })
};
