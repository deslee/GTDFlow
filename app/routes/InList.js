/**
 * Created by desmond on 11/27/2014.
 */
var React = require('react/addons');
var Router = require('react-router');
var TransitionGroup = React.addons.CSSTransitionGroup;
var RouteHandler = Router.RouteHandler;

var InList = require('../controller-views/InList');
var ItemMixin = require('../mixins/ItemMixin');
var ItemStore = require('../stores/Itemstore');

module.exports = React.createClass({
  mixins: [ Router.State ],
  componentWillMount: function() {
  },
  getInitialState: function() {
    return {
    }
  },
  render: function() {
    return <InList />
  }
});
