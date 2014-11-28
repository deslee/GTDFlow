/**
 * Created by desmond on 11/27/2014.
 */
var React = require('react/addons');
var Router = require('react-router');
var TransitionGroup = React.addons.CSSTransitionGroup;
var RouteHandler = Router.RouteHandler;
var ItemStore = require('../stores/Itemstore');
var _ = require('lodash');
var NotFound = require('../views/NotFound');

var ProcessItem = require('../views/ProcessItem');

module.exports = React.createClass({
  mixins: [ Router.State ],
  componentWillMount: function() {
    ItemStore.addChangeListener(this.update);
    this.update();
  },
  componentWillUnmount: function() {
    ItemStore.removeChangeListener(this.update);
  },
  getInitialState: function() {
    return {
      itemName: this.getParams().itemName
    }
  },
  update: function() {
    var state = this.state;
    state.item = ItemStore.findItemByName(this.state.itemName);
    this.setState(state);
  },
  render: function() {
    if (this.state.item) {
      return <ProcessItem itemName={this.state.itemName}/>
    }
    else {
      return <NotFound><p>You tried to access an item called "{this.state.itemName}"</p></NotFound>
    }

  }
});
