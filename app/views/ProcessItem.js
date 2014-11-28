var React = require('react/addons');

var MaterialMixin = require('../mixins/MaterialMixin');
var GfBar = require('../components/GfBar');
var ItemOptions = require('../components/ItemOptions');
var ItemMixin = require('../mixins/ItemMixin');
var ItemActions = require('../actions/ItemActions');
var ItemStore = require('../stores/Itemstore');
var ItemLocations = require('../constants/gtdConstants').ItemLocations;

var ProcessItem = React.createClass({
  mixins: [MaterialMixin, ItemMixin ],
  componentWillMount: function() {
    ItemStore.addChangeListener(this.update);
    this.update();
  },
  componentDidMount: function() {
    if (this.refs.waitingForInput)
      this.refs.waitingForInput.getDOMNode().value = this.state.item.waitingFor;
  },
  componentWillUnmount: function() {
    ItemStore.removeChangeListener(this.update);
  },
  update: function() {
    var item = ItemStore.findItemByName(this.props.itemName);
    var state = this.state;
    state.item = item;
    this.setState(state)
  },
  addAction: function() {
    var element = this.refs.addActionName.getDOMNode();
    var item = this.state.item;
    var actionName = element.value;
    element.value = '';
    if (item) {
      ItemActions.add_action(this.state.item.name, actionName);
    }
  },
  removeAction: function(e) {
    var item = this.state.item;
    var actionName = e.target.getAttribute('data-action-name');

    if (item && actionName) {
      ItemActions.delete_action(item.name, actionName);
    }
  },
  waitingForInputBlurred: function() {
    ItemActions.move_waiting(this.state.item.name, this.refs.waitingForInput.getDOMNode().value);
    $.snackbar({
      content: "Item Saved.", // text of the snackbar
      style: "toast", // add a custom class to your snackbar
      timeout: 100 // time in milliseconds after the snackbar autohides, 0 is disabled
    }).snackbar('show')
  },
  render: function() {
    var item = this.state.item;
    var actionList = item? item.actions.map(function(action) {
      return <li key={action.name}>{action.name}<button className="remove" onClick={this.removeAction} data-action-name={action.name}>remove</button></li>
    }.bind(this)) : null;

    var waitingFor = item.location == ItemLocations.WAITING ? <div><h2>Waiting for</h2>
      <p><input className="form-control" type="text" ref="waitingForInput" onBlur={this.waitingForInputBlurred} /></p></div> : null;

    return <div>
        <h2>{item ? this.state.item.name : null}</h2>
        <form>
          <div className="form-group">
            <input className="form-control floating-label col-xs-2" ref="addActionName" type="text" placeholder="Add Action" />
            <button type="submit" className="btn btn-primary" onClick={this.addAction}>Add Action</button>
          </div>
        </form>


        <h2>Actions</h2>

        <ul className="actions">
          {actionList}
        </ul>

        {waitingFor}

        <ItemOptions item={this.state.item}/>
    </div>
  }
});

module.exports = ProcessItem;
