var React = require("react/addons");
var MaterialMixin = require('../mixins/MaterialMixin');

var Item = React.createClass({
  mixins: [MaterialMixin],
  selectedChanged:function(e){
    var item = this.state.item;
    item.selected = !item.selected;
    this.setState({
      item: item
    })
  },
  getInitialState: function() {
    return {
      item: this.props.item
    }
  },
  render: function() {
    return <div className="list-group-item">
      <div className="row-action-primary checkbox">
        <label><input type="checkbox" onChange={this.selectedChanged} checked={this.state.item.selected}/></label>
      </div>
      <div className="row-content">
        <h4 className="list-group-item-heading">{this.state.item.title}</h4>
        <p className="list-group-item-text"><a href="javascript:void(0)">Process item</a></p>
      </div>
    </div>;
  }
});

module.exports = Item;
