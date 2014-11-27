var React = require('react/addons');

var MaterialMixin = require('../mixins/MaterialMixin');

var Item = require('../components/Item');
var ItemMixin = require('../mixins/ItemMixin');
var ItemStore = require('../stores/Itemstore');
var _ = require('lodash');

var InList = React.createClass({
  mixins: [MaterialMixin, ItemMixin],
  componentWillMount: function() {
    ItemStore.addChangeListener(this.update);
    this.update();
  },
  update: function() {
    var data = ItemStore.getItems().map(function(item) {
      var oldData = _.find(this.state.data, function(e) {
        return e.item.name == item.name;
      });
      return {
        item: item,
        selected: oldData ? oldData.selected : false
      }
    }.bind(this));
    console.log(data);
    this.setState({
      data: data
    })
  },
  getInitialState: function() {
    return {
      data: []
    }
  },
  selectAllCboxChanged: function(e) {
    var items = this.state.data.map(function(data) {
      data.selected = e.target.checked;
      return data;
    });

    this.setState({
      items: items
    })
  },
  render: function() {
    return <div>
        <div className="form-group">
          <input className="form-control floating-label col-xs-2" id="focusedInput" type="text" placeholder="Add Item" />
          <a href="javascript:void(0)" className="btn btn-primary ">Add Item</a>
          <div className=" checkbox">
            <label><input type="checkbox" onChange={this.selectAllCboxChanged}/> Select all</label>
          </div>
        </div>


        <h2>Items</h2>

        <div className="list-group">
          {this.state.data.map(function(data, i) {
            return <Item data={data} key={i}/>
          })}
        </div>

        <button className="btn btn-primary">Delete Selected</button>
      </div>
  }
});

module.exports = InList;
