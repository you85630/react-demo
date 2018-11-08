import React, { Component, Fragment } from 'react';

// 引入组件
import TodoItem from './components/TodoItem';

// 引入样式
import './todolist.css';

class TodoList extends Component {
  // 当组件的state和props发生改变时，render函数会被重新执行
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      inputValue:''
    }

    this.InputChang = this.InputChang.bind(this)
    this.BtnClick = this.BtnClick.bind(this)
    this.Delete = this.Delete.bind(this)
  }

  render() {
    return (
      <Fragment>
        <div className="inputbox">
          <label htmlFor="insertArea">输入内容：</label>
          <input
            type="text"
            id="insertArea"
            value={this.state.inputValue}
            onChange={this.InputChang}
          />
          <button onClick={this.BtnClick}>提交</button>
        </div>
        {/* 这里是注释 */}
        <ul>{this.getItems()}</ul>
      </Fragment>
    )
  }

  getItems() {
    return (
      this.state.list.map((item, index) => {
        // 父件通过属性的形式向子组件传递参数
        // 子组件通过props接受父组件传递的参数

        // 子组件想和父组件通信，子组件需要调用父组件传递的方法
        return (
          <TodoItem
            key={item}
            delet={this.Delete}
            content={item}
            index={index} />
        )
      })
    )
  }

  InputChang(e) {
    const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
  }

  BtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  Delete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {
        list: list
      }
    })
  }
}

export default TodoList;
