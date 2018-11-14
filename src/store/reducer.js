import { CHANGE_INPUT_VAL, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionType'

const defaultState = {
    inputValue: '',
    list: []
}
export default(state = defaultState, action) => {
    if(action.type === CHANGE_INPUT_VAL){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.val
        return newState
    }
    if(action.type === ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if(action.type === DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    if(action.type === INIT_LIST_ACTION){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        return newState
    }
    // state 整个仓库存储的数据
    return state
}