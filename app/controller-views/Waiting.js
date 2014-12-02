var React = require('react/addons');

var ItemList = require('../components/ItemList');
var ItemStore = require('../stores/Itemstore');
var ItemLocations = require('../constants/gtdConstants').ItemLocations;

module.exports = React.createClass({
  componentWillMount: function() {
    ItemStore.addChangeListener(this.update);
    this.update();
  },
  componentWillUnmount: function() {
    ItemStore.removeChangeListener(this.update);
  },
  getInitialState: function() {
    return {
      WaitingItems: []
    }
  },
  update: function() {
    this.setState({
      WaitingItems: ItemStore.findItemsByLocation(ItemLocations.WAITING)
    });
  },
  render: function() {
    return <div>
      <ItemList items={this.state.WaitingItems} title='"Waiting for" Items'></ItemList>
    </div>
  }
});
