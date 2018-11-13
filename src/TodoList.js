import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import 'antd/dist/antd.css'; 
import { Input } from 'antd'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['学习英文','学习react']
    }
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleItenDelete =this.handleItenDelete.bind(this)

  }
  render() {
    return (
      <Fragment>
        <label htmlFor='insertArea'>输入内容</label>
        <Input placeholder="todo info" />
        <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        <ul>
          {this.getTodoList()}
        </ul>
      </Fragment>
    )
  }
  getTodoList() {
    return this.state.list.map((item,index) => {
      return <TodoItem content={item} index={index} key={index} deleteItem={this.handleItenDelete}/>
    })
  }
  handleInputChange(e){
    const v = e.target.value
    this.setState(() => ({
      inputValue: v
    }))
  }
  handleBtnClick(){
    this.setState(prevStete => ({
      list:[...prevStete.list, prevStete.inputValue],
      inputValue:''
    }))
  }
  handleItenDelete(index){
    this.setState(prevStete => {
      const list = [...prevStete.list]
      list.splice(index,1)
      return {list}
    })
  }
}

export default TodoList;
