/**
 * Created by desmond on 11/27/2014.
 */
var React = require('react/addons');
var Router = require('react-router');
var TransitionGroup = React.addons.CSSTransitionGroup;
var RouteHandler = Router.RouteHandler;
var GfBar = require('../components/GfBar');

module.exports = React.createClass({
  mixins: [ Router.State ],
  render: function() {

    var route = this.getRoutes().reverse()[0];
    var key = JSON.stringify(route)+JSON.stringify(this.getParams());

    var title;
    switch(this.getRoutes().reverse()[0].name) {
      case 'inList':
        title = 'In List';
        break;
      case 'processItem': // todo: just uncamelcase and separate by spaces.
        title = 'Process Item';
        break;
      default:
        title = 'Null'
    }

    return <TransitionGroup transitionName="route">
      <GfBar title={title}></GfBar>
      <div className="gf-content">
        <RouteHandler key={key} />
      </div>
    </TransitionGroup>
  }
});
