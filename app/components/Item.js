var React = require("react/addons");
var MaterialMixin = require('../mixins/MaterialMixin');
var ItemLocation = require('../constants/gtdConstants').ItemLocations;
var Router = require('react-router');
var Link = Router.Link;

var Item = React.createClass({
  mixins: [MaterialMixin],
  selectedChanged:function(e){
    this.state.selected = !this.state.selected
    this.setState(this.state);
    if (this.props.selectedChanged) {
      this.props.selectedChanged(this.state.selected);
    }
  },
  getInitialState: function() {
    return {
      item: this.props.item,
      selected: this.props.selected
    }
  },
  componentWillReceiveProps: function(props) {
    var state = this.state;
    if (props.item.name != this.state.item.name) {
      state.item = props.item;
    }
    else if (props.selected != this.state.selected) {
      state.selected = props.selected;
    }
    this.setState(state);
  },
  componentDidMount: function() {
  },
  render: function() {
    var itemText;
    switch(this.state.item.location) {
      case ItemLocation.IN_LIST:
        itemText = <Link to="processItem" params={{itemName: this.state.item.name}}>Process</Link>;
        break;
      case ItemLocation.NEXT_ACTIONS:
        itemText = <Link to="processItem" params={{itemName: this.state.item.name}}>Modify</Link>;
        break;
      case ItemLocation.WAITING:
        itemText = <div>Waiting for: {this.state.item.waitingFor}<br /><Link to="processItem" params={{itemName: this.state.item.name}}>Modify</Link></div>;
    }

    return <div className="list-group-item gf-item">
      <div className="row-action-primary checkbox">
        <label><input type="checkbox" onChange={this.selectedChanged} checked={this.state.selected}/></label>
      </div>
      <div className="row-content">
        <h4 className="list-group-item-heading">{this.state.item.name}</h4>
        <p className="list-group-item-text">
          {itemText}
        </p>
      </div>
    </div>;
  }
});

module.exports = Item;
