var React = require("react/addons");
var MaterialMixin = require('../../mixins/MaterialMixin');
var Modal = require('../Modal');
var ItemActions = require('../../actions/ItemActions');

var ItemOptions = React.createClass({
  mixins: [MaterialMixin],
  getInitialState: function() {
    return {
      item: this.props.item,
      showMoveModal: false
    }
  },
  closeModal: function(modalStateProp) {
    this.state[modalStateProp] = false;
    this.setState(this.state);
  },
  incubateClicked: function() {
    console.log(this.props.item.name, 'incubate');
  },
  moveClicked: function() {
    this.state.showMoveModal = true;
    this.setState(this.state);
  },
  moveModalItemClicked: function(actionMethod) {
    actionMethod(this.props.item.name);
    this.state.showMoveModal = false;
    this.setState(this.state);
  },
  render: function() {
    return <div className="form-group">
      <button className="btn btn-primary" onClick={this.incubateClicked}><i className="fa fa-clock-o"></i>Incubate</button>
      <button className="btn btn-primary" onClick={this.moveClicked}><i className="fa fa-arrow-right"></i>Move</button>

      <Modal id={'moveModal'} title="Move Item" show={this.state.showMoveModal} onClose={this.closeModal.bind(this, 'showMoveModal')}>
        <p>Choose where you would like to move this item to</p>
        <button className="btn btn-primary btn-sm" onClick={this.moveModalItemClicked.bind(this, ItemActions.MOVE_ITEM, 'In List')}>In List</button><br />
      </Modal>
    </div>
  }
});

module.exports = ItemOptions;
