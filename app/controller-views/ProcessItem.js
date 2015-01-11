var React = require('react/addons');

var MaterialMixin = require('../mixins/MaterialMixin');
var ItemOptions = require('../components/ProcessItem/Options');
var ItemMixin = require('../mixins/ItemMixin');
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
  render: function ProcessItem_render() {
    var item = this.state.item;

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
