/**
 * Created by desmond on 11/27/2014.
 */
var React = require('react/addons');
var Router = require('react-router');
var TransitionGroup = React.addons.CSSTransitionGroup;
var RouteHandler = Router.RouteHandler;

var ProcessItem = require('../views/ProcessItem');
var ItemMixin = require('../mixins/ItemMixin');

module.exports = React.createClass({
  mixins: [ Router.State, ItemMixin ],
  getInitialState: function() {
    return {
      itemName: this.getParams().itemName
    }
  },
  render: function() {
    var route = this.getRoutes().reverse()[0];
    var key = JSON.stringify(route)+JSON.stringify(this.getParams());
    console.log(this.state);

    return <TransitionGroup transitionName="route"><RouteHandler key={key} /></TransitionGroup>
  }
})
