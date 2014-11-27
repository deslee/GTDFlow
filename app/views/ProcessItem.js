var React = require('react/addons');

var MaterialMixin = require('../mixins/MaterialMixin');
var GfBar = require('../components/GfBar');
var ItemOptions = require('../components/ItemOptions');

var ProcessItem = React.createClass({
  mixins: [MaterialMixin],
  getInitialState: function() {
    return {
      item: this.props.item
    }
  },
  render: function() {
    console.log(this.state.item);
    var actionList = this.state.item.actions.map(function(action) {
      return <li key={action.name}>{action.name}</li>
    });

    return <div>
        <h2>{this.state.item.name}</h2>
        <div className="form-group">
          <input className="form-control floating-label col-xs-2" id="focusedInput" type="text" placeholder="Add Action" />
          <a href="javascript:void(0)" className="btn btn-primary ">Add Action</a>
        </div>


        <h2>Actions</h2>

        <ul>
          {actionList}
        </ul>

        <ItemOptions item={this.state.item} />
    </div>
  }
});

module.exports = ProcessItem;
