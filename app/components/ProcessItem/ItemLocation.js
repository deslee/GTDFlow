var React = require('react/addons');

var ItemLocations = require('../../constants/gtdConstants').ItemLocations;

module.exports = React.createClass({
  render: function() {
    var location_name;
    switch(this.props.item.location) {
      case ItemLocations.IN_LIST:
        location_name = "In List"
            break;
      case ItemLocations.NEXT_ACTIONS:
        location_name = "Next Actions"
        break;
      case ItemLocations.SOMEDAY_MAYBE:
        location_name = "Someday / Maybe"
        break;
      case ItemLocations.WAITING:
        location_name = "Waiting"
            break;
      case ItemLocations.REFERENCES:
        location_name = "References"
            break;
      default:
            location_name = "N/A"
    }
    return <div>Location: {location_name}</div>
  }
});
