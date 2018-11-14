import React from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

const TodoListUI = (props) => {
    return (
        <div style={{marginTop: '30px',marginLeft:'30px'}}>
            <Input 
              placeholder="todo info" 
              style={{width:'300px',marginRight:'30px'}}
              value={props.inputValue}
              onChange={props.handleInputChange}
              />
            <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
            <List
              style={{width:'300px',marginTop:'30px'}}
              bordered
              dataSource={props.list}
              renderItem={(item, index)=> (<List.Item onClick={()=>{props.handleItemDelete(index)}}>{item}</List.Item>)}
            />
          </div>
        )
}

// class TodoListUI extends Component {
//     render() {
//     return (
//       <div style={{marginTop: '30px',marginLeft:'30px'}}>
//         <Input 
//           placeholder="todo info" 
//           style={{width:'300px',marginRight:'30px'}}
//           value={this.props.inputValue}
//           onChange={this.props.handleInputChange}
//           />
//         <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
//         <List
//           style={{width:'300px',marginTop:'30px'}}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index)=> (<List.Item onClick={()=>{this.props.handleItemDelete(index)}}>{item}</List.Item>)}
//         />
//       </div>
//     )
//   }
// }

export default TodoListUI