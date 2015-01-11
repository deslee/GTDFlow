var React = require('react/addons');

var MaterialMixin = require('../mixins/MaterialMixin');

var AddItem = require('../components/AddItem');
var ItemList = require('../components/ItemList');

var ItemStore = require('../stores/Itemstore');
var _ = require('lodash');

var List = React.createClass({
  componentWillMount: function() {
    ItemStore.addChangeListener(this.update);
    this.update();
  },
  componentWillUnmount: function() {
    ItemStore.removeChangeListener(this.update);
  },
  getInitialState: function() {
    return {
      Items: []
    }
  },
  update: function() {
    this.setState({
      Items: ItemStore.findItemsByLocation("In list")
    });
  },
  render: function() {
    return <div>
        <AddItem location="In list"></AddItem>
        <ItemList items={this.state.Items} title="In List Items"></ItemList>
      </div>
  }
});

module.exports = List;
