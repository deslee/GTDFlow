var React = require("React");

var GfBar = React.createClass({
  render: function() {
    return <div className="navbar navbar-warning">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-warning-collapse">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="">{this.props.title}</a>
      </div>
    </div>
    }
});

module.exports = GfBar;
