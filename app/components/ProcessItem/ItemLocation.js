var React = require('react/addons');


module.exports = React.createClass({
  render: function() {
    var location_name = this.props.item.location;
    return <div>Location: {location_name}</div>
  }
});
