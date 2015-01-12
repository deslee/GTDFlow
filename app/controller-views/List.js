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
      Items: ItemStore.findItemsByLocation(this.props.list.name)
    });
  },
  render: function() {
    var components = [
      <AddItem location={this.props.list.name}></AddItem>,
    ]

    return <div>
        {components}
        <ItemList items={this.state.Items} title={this.props.list.name}></ItemList>
      </div>
  }
});

module.exports = List;
