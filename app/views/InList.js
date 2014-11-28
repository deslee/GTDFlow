var React = require('react/addons');

var MaterialMixin = require('../mixins/MaterialMixin');

var Item = require('../components/Item');
var ItemMixin = require('../mixins/ItemMixin');
var ItemStore = require('../stores/Itemstore');
var ItemActions = require('../actions/ItemActions');
var _ = require('lodash');

var InList = React.createClass({
  mixins: [MaterialMixin, ItemMixin],
  componentWillMount: function() {
    ItemStore.addChangeListener(this.update);
    this.update();
  },
  componentWillUnmount: function() {
    ItemStore.removeChangeListener(this.update);
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
    var data = this.state.data.map(function(data) {
      data.selected = e.target.checked;
      return data;
    });

    this.setState({
      data: data
    })
  },
  addItem: function() {
    var element = this.refs.itemName.getDOMNode();
    var itemName = element.value;
    element.value = '';
    ItemActions.add_item(itemName);
  },
  deleteItems: function() {
    this.state.data.forEach(function(data) {
      if (data.selected) {
        ItemActions.delete_item(data.item.name);
      }
    })
  },
  itemSelectedChanged: function(data, selected) {
    data.selected = selected;
    this.setState(this.state);
  },
  render: function() {
    return <div>
        <form>
          <div className="form-group">
            <input className="form-control floating-label col-xs-2" ref="itemName" type="text" placeholder="Add Item" />
            <button type="submit" className="btn btn-primary" onClick={this.addItem}>Add Item</button>
          </div>
        </form>

        <div className="form-group">
          <div className=" checkbox">
            <label><input type="checkbox" onChange={this.selectAllCboxChanged}/> Select all</label>
          </div>
        </div>


        <h2>Items</h2>

        <div className="list-group">
          {_.sortBy(this.state.data, function(data) {
            return data.item.dateAdded.unix();
          }).reverse().map(function(data, i) {
            return <Item item={data.item} selected={data.selected} key={data.item.name} selectedChanged={this.itemSelectedChanged.bind(this, data)} />
          }.bind(this))}
        </div>

        <button className="btn btn-primary" onClick={this.deleteItems}>Delete Selected</button>
      </div>
  }
});

module.exports = InList;
