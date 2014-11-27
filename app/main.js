angular.module('gtdflow', []);
var GfBar = require('./components/gf-bar');

$.material.init();

var React = require('react/addons');



React.render(<div>
  <GfBar></GfBar>
  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"></input>

</div>, document.body);
