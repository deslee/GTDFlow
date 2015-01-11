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

    return <div>
      <GfBar title="GTDFlow"></GfBar>
      <div className="gf-content">
        <TransitionGroup transitionName="route" transitionLeave={false}>
          <RouteHandler key={key} />
        </TransitionGroup>
      </div>
    </div>
  }
});
