var React = require('react/addons');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      show: this.props.show
    }
  },
  decideVisibility: function() {
    $('#'+this.props.id).modal(this.state.show ? 'show' : 'hide');
  },
  componentDidMount: function() {
    this.decideVisibility();
  },
  componentWillReceiveProps: function(props) {
    this.state.show = props.show;
    this.setState(this.state);
    this.decideVisibility();
  },
  closeClicked: function() {
    if (this.props.onClose) {
      this.props.onClose();
    }
  },
  render: function() {
    return <div className="modal" id={this.props.id}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" onClick={this.closeClicked} aria-hidden="true">×</button>
            <h4 className="modal-title">{this.props.title}</h4>
          </div>
          <div className="modal-body">
            {this.props.children}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" onClick={this.closeClicked}>Close</button>
          </div>
        </div>
      </div>
    </div>
  }
});
