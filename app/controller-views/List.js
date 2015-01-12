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
      Items: ItemStore.findItemsByLocation(this.props.name)
    });
  },
  render: function() {
    return <div>
        <AddItem location={this.props.name}></AddItem>
        <ItemList items={this.state.Items} title={this.props.name}></ItemList>
      </div>
  }
});

module.exports = List;
