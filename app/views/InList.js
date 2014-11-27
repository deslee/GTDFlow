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

var React = require('react/addons');

var MaterialMixin = require('../mixins/MaterialMixin');
var GfBar = require('../components/GfBar');

var Item = require('../components/Item');

var InList = React.createClass({
  mixins: [MaterialMixin],
  componentWillMount: function() {
  },
  getInitialState: function() {
    return {
      listItems: dummyList
    }
  },
  selectAllCboxChanged: function(e) {
    var items = this.state.listItems.map(function(item) {
      item.selected = e.target.checked;
      return item;
    });

    this.setState({
      listItems: items
    })
  },
  render: function() {
    return <div>
      <GfBar title="In List"></GfBar>

      <div className="gf-content">
        <div className="form-group">
          <input className="form-control floating-label col-xs-2" id="focusedInput" type="text" placeholder="Add Item" />
          <a href="javascript:void(0)" className="btn btn-primary ">Add Item</a>
          <div className=" checkbox">
            <label><input type="checkbox" onChange={this.selectAllCboxChanged}/> Select all</label>
          </div>
        </div>


        <h2>Items</h2>

        <div className="list-group">
          {this.state.listItems.map(function(item, i) {
            return <Item item={item} key={i}/>
          })}
        </div>

        <button className="btn btn-primary">Delete Selected</button>
      </div>
    </div>
  }
});

module.exports = InList;
