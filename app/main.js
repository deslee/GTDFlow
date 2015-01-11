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


var routes = <Route handler={MainHandler}>
  <Route name="list" path="/:listName" handler={List} />
</Route>;

Router.run(routes, function routerHandler(Handler) {
  React.render(<Handler />, document.getElementById("gf-wrapper"));
})
