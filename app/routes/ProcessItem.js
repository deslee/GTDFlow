/**
 * Created by desmond on 11/27/2014.
 */
var React = require('react/addons');
var Router = require('react-router');
var TransitionGroup = React.addons.CSSTransitionGroup;
var RouteHandler = Router.RouteHandler;

var ProcessItem = require('../views/ProcessItem');
var ItemMixin = require('../mixins/ItemMixin');
var ItemStore = require('../stores/Itemstore');

module.exports = React.createClass({
  mixins: [ Router.State, ItemMixin ],
  componentWillMount: function() {
    ItemStore.addChangeListener(this.update);
    this.update();
  },
  update: function() {
    var item = ItemStore.findItemByName(this.state.itemName);
    var state = this.state;
    state.item = item;
    this.setState(state)
  },
  getInitialState: function() {
    return {
      itemName: this.getParams().itemName
    }
  },
  render: function() {
    return <ProcessItem item={this.state.item}/>
  }
})
