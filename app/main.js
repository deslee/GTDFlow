angular.module('gtdflow', []);
var React = require('react/addons');
var Router = require('react-router');

var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var MainHandler = require('./routes/MainHandler');
var List = require('./routes/List');

var ListActions = require('./actions/ListActions')

var dummyListList = [
  {
    name: 'In List (test)'
  }
]

dummyListList.forEach(function(list) {
  ListActions.ADD_LIST(list.name);
})

var routes = <Route handler={MainHandler}>
  <Route name="list" path="/:listName" handler={List} />
</Route>;

Router.run(routes, function routerHandler(Handler) {
  React.render(<Handler />, document.getElementById("gf-wrapper"));
})
