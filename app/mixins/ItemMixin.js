var ItemStore = require('../stores/Itemstore');

module.exports = {
  componentWillMount: function() {
    ItemStore.addChangeListener(this.itemStoreUpdate);
    this.itemStoreUpdate();
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
