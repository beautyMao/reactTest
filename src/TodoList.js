import React, { Component } from 'react'
import store from './store'
import { getInitList, getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'


class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    
    //订阅
    store.subscribe(this.handleStoreChange)
  }
  render() {
    return <TodoListUI 
            inputValue={this.state.inputValue}
            handleInputChange={this.handleInputChange}
            handleBtnClick={this.handleBtnClick}
            list={this.state.list}
            handleItemDelete={this.handleItemDelete}/> 
  }
  componentDidMount() {
    const action = getInitList()
    store.dispatch(action)


    let listeners = [2,3]
    const sub = (listener) => {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter(l => l !== listener);
      }
    };
    console.log(listeners,sub)
    sub(4)
    console.log(listeners,sub)
    sub(4)
    console.log(listeners,sub)



  }
  handleInputChange(e){
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleStoreChange(){
    this.setState(store.getState())
  }
  handleBtnClick(){
    const action = getAddItemAction()
    store.dispatch(action)
  }
  handleItemDelete(index){
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
  
}

export default TodoList;
