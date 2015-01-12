var React = require("react/addons");
var Router = require('react-router');
var Link = Router.Link;
var MaterialMixin = require('../mixins/MaterialMixin');
var ListStore = require('../stores/Liststore')

var GfBar = React.createClass({
  mixins: [MaterialMixin],
  clicked: function() {
    $('.navbar .navbar-collapse.collapse.in').collapse('hide')
  },
  getInitialState: function() {

    var lists = ListStore.getLists();
    return {
      lists: lists
    }
  },
  componentWillMount: function() {
    ListStore.addChangeListener(this.update);
    this.update();
  },
  componentWillUnmount: function() {
    ListStore.removeChangeListener(this.update);
  },
  update: function() {
    var lists = ListStore.getLists();
    this.setState({
      lists: lists
    })
  },
  render: function() {
    var lists = Object.keys(this.state.lists).map(function(name) {
      var list = this.state.lists[name]
      return <li key={list.name}><Link to="list" params={{listName: list.name}} onClick={this.clicked}>{list.name}</Link></li>
    }.bind(this))

    return <div className="navbar navbar-default navbar-fixed-top">
      <div class="container">
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
            {lists}
          </ul>
        </div>
      </div>
    </div>
    }
});

module.exports = GfBar;
