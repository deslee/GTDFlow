/**
 * Created by desmond on 11/27/2014.
 */
var React = require('react/addons');
var Router = require('react-router');

var InList = require('./InList');
var ItemMixin = require('../mixins/ItemMixin');
var ItemStore = require('../stores/Itemstore');
var Waiting = require('../controller-views/Waiting');

module.exports = React.createClass({
  mixins: [ Router.State ],
  componentWillMount: function() {
  },
  getInitialState: function() {
    return {
    }
  },
  render: function() {
    return <Waiting></Waiting>
  }
});
