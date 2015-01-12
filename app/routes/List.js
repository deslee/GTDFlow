/**
 * Created by desmond on 11/27/2014.
 */
var React = require('react/addons');
var Router = require('react-router');
var TransitionGroup = React.addons.CSSTransitionGroup;
var RouteHandler = Router.RouteHandler;

var List = require('../controller-views/List');
var ItemMixin = require('../mixins/ItemMixin');
var ItemStore = require('../stores/Itemstore');

var ListStore = require('../stores/Liststore');

module.exports = React.createClass({
  mixins: [ Router.State ],
  componentWillMount: function() {
  },
  getInitialState: function() {
    return {
    }
  },
  render: function() {
    var list = ListStore.getListByName(this.getParams().listName);
    return <List list={list} />
  }
});
