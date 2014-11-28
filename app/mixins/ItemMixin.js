var ItemStore = require('../stores/Itemstore');

module.exports = {
  componentWillMount: function() {
    ItemStore.addChangeListener(this.itemStoreUpdate);
    this.itemStoreUpdate();
  },
  componentWillUnmount: function() {
    ItemStore.removeChangeListener(this.itemStoreUpdate);
  },
  itemStoreUpdate: function() {
    var state = this.state;
    state.items = ItemStore.getItems();
    this.setState(state);
  },
  getInitialState: function() {
    return {
      items: []
    }
  }
}
