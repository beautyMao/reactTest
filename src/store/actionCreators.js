import { CHANGE_INPUT_VAL, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionType'
import axios from 'axios'

export const getInputChangeAction = (val) => ({
    type: CHANGE_INPUT_VAL,
    val: val
})

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})

export const initItemAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

export const getInitList = () => {
    return (dispatch)=>{
        axios.get('./list.json').then((res)=>{
          const data = res.data
          const action = initItemAction(data)
          dispatch(action)
        }).catch()
    }
}