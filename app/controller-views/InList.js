var React = require('react/addons');

var MaterialMixin = require('../mixins/MaterialMixin');

var AddItem = require('../components/AddItem');
var ItemList = require('../components/ItemList');

var ItemStore = require('../stores/Itemstore');
var ItemActions = require('../actions/ItemActions');
var ItemLocations = require('../constants/gtdConstants').ItemLocations;
var _ = require('lodash');

var InList = React.createClass({
  componentWillMount: function() {
    ItemStore.addChangeListener(this.update);
    this.update();
  },
  componentWillUnmount: function() {
    ItemStore.removeChangeListener(this.update);
  },
  getInitialState: function() {
    return {
      InListItems: []
    }
  },
  update: function() {
    this.setState({
      InListItems: ItemStore.findItemsByLocation(ItemLocations.IN_LIST)
    });
  },
  render: function() {
    return <div>
        <AddItem></AddItem>
        <ItemList items={this.state.InListItems} title="In List Items"></ItemList>
      </div>
  }
});

module.exports = InList;
