import React, { Component } from 'react'
import PropTypes from 'prop-types'


class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }
  render() {
    const { content, test } = this.props 
    return (
      <li key={'li_' + this.props.index} onClick={this.handleDelete}>
        {test}-{ content }
      </li>
    )
  }
  handleDelete(){
    const { deleteItem,index } = this.props
    deleteItem(index)
  }
}

TodoItem.propTypes = {
  deleteItem: PropTypes.func,
}
TodoItem.defaultProps = {    
    test: '我是props的默认值！'
};


export default TodoItem;
