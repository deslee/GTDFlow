var React = require("react/addons");
var ItemActions = require('../actions/ItemActions');

module.exports = React.createClass({
  addItem: function() {
    var element = this.refs.itemName.getDOMNode();
    var itemName = element.value;
    element.value = '';
    ItemActions.add_item(itemName);
  },
  render: function() {
    return <form>
      <div className="form-group">
        <input className="form-control floating-label col-xs-2" ref="itemName" type="text" placeholder="Add Item" />
        <button type="submit" className="btn btn-primary" onClick={this.addItem}>Add Item</button>
      </div>
    </form>;
  }
});
