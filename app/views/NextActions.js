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
      NextActionItems: []
    }
  },
  update: function() {
    this.setState({
      NextActionItems: ItemStore.findItemsByLocation(ItemLocations.NEXT_ACTIONS)
    });
  },
  render: function() {
    return <div>
      <ItemList items={this.state.NextActionItems}></ItemList>
    </div>
  }
});
