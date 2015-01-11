var React = require('react/addons');
var ItemActions = require('../../actions/ItemActions');

module.exports = React.createClass({
  addAction: function() {
    var element = this.refs.addActionName.getDOMNode();
    var item = this.props.item;
    var actionName = element.value;
    element.value = '';
    if (item) {
      ItemActions.ADD_ACTION_TO_ITEM(this.props.item.name, actionName);
    }
  },
  render: function() {
    return <div>
      <form onSubmit={this.addAction}>
        <div className="form-group">
          <input className="form-control floating-label col-xs-2" ref="addActionName" type="text" placeholder="Add Action" />
          <button type="submit" className="btn btn-primary">Add Action</button>
        </div>
      </form>
    </div>
  }
});
