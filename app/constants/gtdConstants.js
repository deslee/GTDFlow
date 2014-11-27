var keyMirror = require('keymirror');

module.exports = {
  ActionTypes: keyMirror({
    TEST_ACTION: null,
  }),

  PayloadSources: keyMirror({
    VIEW_ACTION: null
  })
};
