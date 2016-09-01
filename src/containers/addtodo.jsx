import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addItem} from '../actions/actions';

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      inputText: ''
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onChangeHandler(e) {
    this.setState({
      inputText: e.target.value
    });
  }
  onClickHandler(e) {
    e.preventDefault();
    this.props.addItem(this.state.inputText);
    this.setState({
      inputText: ''
    });
  }
  render() {
    return (
      <div>
        <form>
          <input type='text' value={this.state.inputText} onChange={this.onChangeHandler} />
          <button type='submit' onClick={this.onClickHandler}>Add</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addItem}, dispatch);
};

export default connect(null, mapDispatchToProps)(AddTodo);
