var React = require('react/addons');

module.exports = React.createClass({
  render: function() {
    var details = null;
    if (this.props.children) {
      details = <div>
        <p>Details:</p>
        {this.props.children}
      </div>
    }
    return <div>
      <h1>Not found</h1>
      <p>Sorry, the applicaation cannot find the resource you tried to access.</p>
      {details}
    </div>
  }
});
