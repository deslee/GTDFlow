angular.module('gtdflow', []);
var React = require('react/addons');
var ItemActions = require('./actions/ItemActions');
var Router = require('react-router');

var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var MainHandler = require('./routes/MainHandler');

var ProcessItem = require('./routes/ProcessItem');
var InList = require('./routes/InList');
var NextActions = require('./routes/NextActions');

var dummyList = [
  {
    name: "See Interstellar",
    _actions: ['Check showtimes online', 'Buy tickets']
  },
  {
    name: "Buy a new laptop",
    _actions: ['Look up preferred features online', 'Make list of stores']
  },
  {
    name: "Create a GTD application",
    _actions: ['Google about GTD']
  }
];

dummyList.forEach(function(item) {
  ItemActions.initialize(item);
  item._actions.forEach(function(action) {
    ItemActions.add_action(item.name, action);
  });
});


var routes = <Route handler={MainHandler}>
  <DefaultRoute handler={InList} name="inList" />
  <Route handler={ProcessItem} name="processItem" path="process/:itemName" />
  <Route handler={NextActions} name="nextActions" path="nextActions" />
</Route>;

Router.run(routes, function(Handler) {
  React.render(<Handler />, document.getElementById("gf-wrapper"));
})
