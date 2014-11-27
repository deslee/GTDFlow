var React = require("react/addons");
var MaterialMixin = require('../mixins/MaterialMixin');

var Item = React.createClass({
  mixins: [MaterialMixin],
  selectedChanged:function(e){
    var data = this.state.data;
    data.selected = !data.selected;
    this.setState({
      data: data
    });
  },
  getInitialState: function() {
    return {
      data: this.props.data
    }
  },
  render: function() {
    return <div className="list-group-item">
      <div className="row-action-primary checkbox">
        <label><input type="checkbox" onChange={this.selectedChanged} checked={this.state.data.selected}/></label>
      </div>
      <div className="row-content">
        <h4 className="list-group-item-heading">{this.state.data.item.name}</h4>
        <p className="list-group-item-text"><a href="javascript:void(0)">Process item</a></p>
      </div>
    </div>;
  }
});

module.exports = Item;
