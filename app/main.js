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
var ItemActions = require('./actions/ItemActions')

var dummyListList = [
{
  name: 'In List (test)',
  listWidgets: [{name: 'AddItem'}],
  listItems: [
    'Test Item 1',
    'Test item 2',
  ]
},
{
  name: 'Next Actions'
},
{
  name: 'Waiting For'
}
]

dummyListList.forEach(function(list) {
  ListActions.ADD_LIST(list.name);

  if (list.listWidgets) {
    list.listWidgets.forEach(function(widget) {
      ListActions.ADD_WIDGET_TO_LIST(list.name, widget)
    });
  }

  if (list.listItems) {
    list.listItems.forEach(function(item) {
      ItemActions.ADD_ITEM(item, list.name);
    });
  }
})

var routes = <Route handler={MainHandler}>
<Route name="list" path="/:listName" handler={List} />
</Route>;

Router.run(routes, function routerHandler(Handler) {
  React.render(<Handler />, document.getElementById("gf-wrapper"));
})
