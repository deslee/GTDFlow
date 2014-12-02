var React = require('react/addons');

var MaterialMixin = require('../mixins/MaterialMixin');
var ItemOptions = require('../components/ProcessItem/Options');
var ItemMixin = require('../mixins/ItemMixin');
var ItemActions = require('../actions/ItemActions');
var ItemStore = require('../stores/Itemstore');
var ItemActionsList = require('../components/ProcessItem/ActionsList')
var ItemLocations = require('../constants/gtdConstants').ItemLocations;
var ItemAddAction = require("../components/ProcessItem/AddAction");
var ItemLocation = require('../components/ProcessItem/ItemLocation');

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
  waitingForInputBlurred: function() {
    ItemActions.move_waiting(this.state.item.name, this.refs.waitingForInput.getDOMNode().value);
    $.snackbar({
      // text of the snackbar
      content: "Item Saved.",
      // add a custom class to your snackbar
      style: "toast",
      // time in milliseconds after the snackbar autohides, 0 is disabled
      timeout: 100
    }).snackbar('show')
  },
  render: function ProcessItem_render() {
    var item = this.state.item;

    var waitingFor = item.location == ItemLocations.WAITING ? <div><h2>Waiting for</h2>
      <p><input className="form-control" type="text" ref="waitingForInput" onBlur={this.waitingForInputBlurred} /></p></div> : null;

    return <div>
        <h2>{item ? this.state.item.name : null}</h2>
        <ItemLocation item={item} />

        <ItemAddAction item={item} />

        <ItemActionsList item={item} />

        {waitingFor}

        <ItemOptions item={item}/>
    </div>
  }
});

module.exports = ProcessItem;
