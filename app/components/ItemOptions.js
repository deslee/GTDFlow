var React = require("React")
var MaterialMixin = require('../mixins/MaterialMixin');

var ItemOptions = React.createClass({
  mixins: [MaterialMixin],
  getInitialState: function() {
    return {
      item: this.props.item
    }
  },
  incubateClicked: function() {
    console.log(this.props.item.title, 'incubate');
  },
  moveClicked: function() {
    console.log(this.props.item.title, 'moved');
  },
  render: function() {
    return <div className="form-group">
      <button className="btn btn-primary" onClick={this.incubateClicked}><i className="fa fa-clock-o"></i>Incubate</button>
      <button className="btn btn-primary" onClick={this.moveClicked}><i className="fa fa-arrow-right"></i>Move</button>
    </div>
  }
});

module.exports = ItemOptions;
