angular.module('gtdflow', []);
var React = require('react/addons');

var ProcessItem = require('./views/ProcessItem');
var InList = require('./views/InList');

var dummyList = [
  {
    title: "See Interstellar",
    selected: false
  },
  {
    title: "Buy a new laptop",
    selected: false
  },
  {
    title: "Create a GTD application",
    selected: false
  }
];



React.render(<div><InList></InList><ProcessItem item={dummyList[0]}></ProcessItem></div>, document.getElementById("gf-wrapper"));
