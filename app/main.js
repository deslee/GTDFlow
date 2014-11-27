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


angular.module('gtdflow', []);
var GfBar = require('./components/gf-bar');

$.material.init();

var React = require('react/addons');

var MaterialMixin = {
  componentDidMount: function() {
    $.material.init();
  }
};

var InListItem = React.createClass({
  mixins: [MaterialMixin],
  selectedChanged:function(){
    var item = this.state.item;
    item.selected = !item.selected;
    this.setState({
      item: item
    })
  },
  getInitialState: function() {
    return {
      item: this.props.item
    }
  },
  render: function() {
    return <div className="list-group-item">
      <div className="row-action-primary checkbox">
        <label><input type="checkbox" onChange={this.selectedChanged} checked={this.state.item.selected}/></label>
      </div>
      <div className="row-content">
        <h4 className="list-group-item-heading">{this.props.item.title}</h4>
        <p className="list-group-item-text"><a href="javascript:void(0)">Process item</a></p>
      </div>
    </div>;
  }
});

var InList = React.createClass({
  mixins: [MaterialMixin],
  selectAllCboxChanged: function(e) {
    var items = this.state.listItems.map(function(item) {
      item.selected = e.target.checked;
      return item;
    });

    this.setState({
      listItems: items
    })
  },
  getInitialState: function() {
    return {
      listItems: dummyList
    }
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
            return <InListItem item={item} key={i}/>
          })}
        </div>

        <button className="btn btn-primary">Delete Selected</button>
      </div>
    </div>
  },
});

var ItemOptions = React.createClass({
  getInitialState: function() {
    return {
      item: this.props.item
    }
  },
  incubateClicked: function() {
    console.log(this.props.item.title, 'incubate');
  },
  moveClicked: function() {
    console.log(this.props.item.title, 'moved');
  },
  render: function() {
    return <div className="form-group">
      <button className="btn btn-primary" onClick={this.incubateClicked}><i className="fa fa-clock-o"></i>Incubate</button>
      <button className="btn btn-primary" onClick={this.moveClicked}><i className="fa fa-arrow-right"></i>Move</button>
    </div>
  }
});

var ProcessItem = React.createClass({
  mixins: [MaterialMixin],
  getInitialState: function() {
    return {
      item: this.props.item
    }
  },
  render: function() {
    return <div>
      <GfBar title="Process Item"></GfBar>


      <div className="gf-content">
        <h2>See Interstellar</h2>
        <div className="form-group">
          <input className="form-control floating-label col-xs-2" id="focusedInput" type="text" placeholder="Add Action" />
          <a href="javascript:void(0)" className="btn btn-primary ">Add Action</a>
        </div>


        <h2>Actions</h2>

        <ul>
          <li>Check showtimes online</li>
          <li>Buy tickets</li>
        </ul>

        <ItemOptions item={this.state.item} />
      </div>
    </div>
  }
})

React.render(<div><InList></InList><ProcessItem item={dummyList[0]}></ProcessItem></div>, document.getElementById("gf-wrapper"));
