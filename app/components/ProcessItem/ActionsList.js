var React = require('react/addons');
var ItemActions = require('../../actions/ItemActions');

module.exports = React.createClass({
  removeAction: function(e) {
    var item = this.props.item;
    var actionName = e.target.getAttribute('data-action-name');

    if (item && actionName) {
      ItemActions.delete_action(item.name, actionName);
    }
  },
  render: function() {
    var item = this.props.item;
    var actionList = item ? item.actions.map(function(action) {
      return <li key={action.name}>{action.name}<button className="remove" onClick={this.removeAction} data-action-name={action.name}>remove</button></li>
    }.bind(this)) : null;

    return <div>
      <h2>Actions</h2>

      <ul className="actions">
          {actionList}
      </ul>
    </div>
  }
});
