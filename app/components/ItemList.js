var React = require('react/addons');
var ItemActions = require('../actions/ItemActions');
var MaterialMixin = require('../mixins/MaterialMixin');
var ItemStore = require('../stores/Itemstore');
var _ = require('lodash');
var Item = require('../components/Item');

module.exports = React.createClass({
  mixins: [MaterialMixin],
  deleteItems: function() {
    this.state.data.forEach(function(data) {
      if (data.selected) {
        ItemActions.DELETE_ITEM(data.item.id);
      }
    })
  },
  getInitialState: function() {
    return {
      data: this.props.items.map(function(item) {
        return {
          item: item,
          selected: false
        }
      })
    }
  },
  componentWillReceiveProps: function(props) {
    this.setState({
      data: props.items.map(function(item) {
        return {
          item: item,
          selected: false
        }
      })
    })
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
  itemSelectedChanged: function(data, selected) {
    data.selected = selected;
    this.setState(this.state);
  },
  componentDidMount: function() {
  },
  render: function() {
    console.log(this.state.data)
    if (this.state.data.length > 0) {
      return <div className="">
        <div className="form-group">
          <div className=" checkbox">
            <label>
              <input type="checkbox" onChange={this.selectAllCboxChanged}/>
              Select all
            </label>
          </div>
        </div>
        <h2>{this.props.title ? this.props.title : "Items"}</h2>
        <div className="list-group">
          {_.sortBy(this.state.data, function (data) {
            return data.item.dateAdded.unix();
          }).reverse().map(function (data, i) {
            return <Item item={data.item} selected={data.selected} key={data.item.id} selectedChanged={this.itemSelectedChanged.bind(this, data)} />
          }.bind(this))}
        </div>
        <button className="btn btn-primary" onClick={this.deleteItems}>Delete Selected</button>
      </div>;
    }
    else {
      return <div>
        <h2>No Items</h2>
        <p>There are no items in this list</p>
      </div>
    }
  }
});
