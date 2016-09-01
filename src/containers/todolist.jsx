import React, {Component} from 'react';
import {connect} from 'react-redux';
import Todo from '../components/todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let list = this.props.items.map((item, index) => {
      return (
        <Todo key={index} item={item} />
      );
    });

    return (
      <div>
        {list}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

export default connect(mapStateToProps, null)(TodoList);
