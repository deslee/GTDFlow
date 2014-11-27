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
var InList = require('./views/InList');

var dummyList = [
  {
    name: "See Interstellar",
  },
  {
    name: "Buy a new laptop",
    selected: false
  },
  {
    name: "Create a GTD application",
    selected: false
  }
];

dummyList.forEach(function(item) {
  ItemActions.initialize(item);
});


var routes = <Route handler={MainHandler}>
  <DefaultRoute handler={InList} name="inlist" />
  <Route handler={ProcessItem} name="processItem" path="process/:itemName" />
</Route>

Router.run(routes, function(Handler) {
  React.render(<Handler />, document.getElementById("gf-wrapper"));
})
