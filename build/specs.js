(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by desmond on 11/27/2014.
 */
var gtdDispatcher = require('../dispatchers/gtdDispatcher');
var gtdConstants = require('../constants/gtdConstants');
var ActionTypes = gtdConstants.ActionTypes;

module.exports = {
  testAction: function() {
    gtdDispatcher.handleViewAction({
      type: ActionTypes.TEST_ACTION
    });
  }
}

},{"../constants/gtdConstants":2,"../dispatchers/gtdDispatcher":3}],2:[function(require,module,exports){
var keyMirror = require('keymirror');

module.exports = {
  ActionTypes: keyMirror({
    TEST_ACTION: null,
  }),

  PayloadSources: keyMirror({
    VIEW_ACTION: null
  })
};

},{"keymirror":"g1Krqd"}],3:[function(require,module,exports){
var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');
var gtdConstants = require('../constants/gtdConstants');
var PayloadSources = gtdConstants.PayloadSources;

module.exports = assign(new Dispatcher(), {
  handleViewAction: function(action) {
    var payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }
});

},{"../constants/gtdConstants":2,"flux":"yNuHtp","object-assign":"sfani3"}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGVzbW9uZFxcUHJvamVjdHNcXEdUREZsb3dcXG5vZGVfbW9kdWxlc1xcZ3VscC1icm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsIkM6L1VzZXJzL2Rlc21vbmQvUHJvamVjdHMvR1RERmxvdy9hcHAvYWN0aW9ucy9JdGVtQWN0aW9ucy5qcyIsIkM6L1VzZXJzL2Rlc21vbmQvUHJvamVjdHMvR1RERmxvdy9hcHAvY29uc3RhbnRzL2d0ZENvbnN0YW50cy5qcyIsIkM6L1VzZXJzL2Rlc21vbmQvUHJvamVjdHMvR1RERmxvdy9hcHAvZGlzcGF0Y2hlcnMvZ3RkRGlzcGF0Y2hlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRlc21vbmQgb24gMTEvMjcvMjAxNC5cclxuICovXHJcbnZhciBndGREaXNwYXRjaGVyID0gcmVxdWlyZSgnLi4vZGlzcGF0Y2hlcnMvZ3RkRGlzcGF0Y2hlcicpO1xyXG52YXIgZ3RkQ29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzL2d0ZENvbnN0YW50cycpO1xyXG52YXIgQWN0aW9uVHlwZXMgPSBndGRDb25zdGFudHMuQWN0aW9uVHlwZXM7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICB0ZXN0QWN0aW9uOiBmdW5jdGlvbigpIHtcclxuICAgIGd0ZERpc3BhdGNoZXIuaGFuZGxlVmlld0FjdGlvbih7XHJcbiAgICAgIHR5cGU6IEFjdGlvblR5cGVzLlRFU1RfQUNUSU9OXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwidmFyIGtleU1pcnJvciA9IHJlcXVpcmUoJ2tleW1pcnJvcicpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgQWN0aW9uVHlwZXM6IGtleU1pcnJvcih7XHJcbiAgICBURVNUX0FDVElPTjogbnVsbCxcclxuICB9KSxcclxuXHJcbiAgUGF5bG9hZFNvdXJjZXM6IGtleU1pcnJvcih7XHJcbiAgICBWSUVXX0FDVElPTjogbnVsbFxyXG4gIH0pXHJcbn07XHJcbiIsInZhciBEaXNwYXRjaGVyID0gcmVxdWlyZSgnZmx1eCcpLkRpc3BhdGNoZXI7XHJcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XHJcbnZhciBndGRDb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMvZ3RkQ29uc3RhbnRzJyk7XHJcbnZhciBQYXlsb2FkU291cmNlcyA9IGd0ZENvbnN0YW50cy5QYXlsb2FkU291cmNlcztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYXNzaWduKG5ldyBEaXNwYXRjaGVyKCksIHtcclxuICBoYW5kbGVWaWV3QWN0aW9uOiBmdW5jdGlvbihhY3Rpb24pIHtcclxuICAgIHZhciBwYXlsb2FkID0ge1xyXG4gICAgICBzb3VyY2U6IFBheWxvYWRTb3VyY2VzLlZJRVdfQUNUSU9OLFxyXG4gICAgICBhY3Rpb246IGFjdGlvblxyXG4gICAgfTtcclxuICAgIHRoaXMuZGlzcGF0Y2gocGF5bG9hZCk7XHJcbiAgfVxyXG59KTtcclxuIl19
