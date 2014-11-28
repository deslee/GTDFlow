var React = require("react/addons");
var Router = require('react-router');
var Link = Router.Link;
var MaterialMixin = require('../mixins/MaterialMixin');

var GfBar = React.createClass({
  mixins: [MaterialMixin],
  render: function() {
    return <div className="navbar navbar-default">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="javascript:void(0)">{this.props.title}</a>
      </div>
      <div className="navbar-collapse collapse navbar-responsive-collapse">
        <ul className="nav navbar-nav">
          <li><Link to="inList">In List</Link></li>
        </ul>
      </div>
    </div>
    }
});

module.exports = GfBar;
