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
    return <div>
      <GfBar title="Process Item"></GfBar>
      <div className="gf-content">
        <h2>{this.state.item.title}</h2>
        <div className="form-group">
          <input className="form-control floating-label col-xs-2" id="focusedInput" type="text" placeholder="Add Action" />
          <a href="javascript:void(0)" className="btn btn-primary ">Add Action</a>
        </div>


        <h2>Actions</h2>

        <ul>
          <li>Check showtimes online</li>
          <li>Buy tickets</li>
        </ul>

        <ItemOptions item={this.state.item} />
      </div>
    </div>
  }
});

module.exports = ProcessItem;
