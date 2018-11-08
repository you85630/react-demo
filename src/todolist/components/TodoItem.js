import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{

  constructor(props){
    super(props)

    this.Delete = this.Delete.bind(this)
  }
  //  此处为防止子组件被重复执行，提升性能
  shouldComponentUpdate(nextProps, nextState) {
    // 判断当前content是否和之前的content是否相同
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }

  render() {
    const { content } = this.props
    return (
      <Fragment>
        <li
          onClick={this.Delete}
          // 这是HTML代码转义
          dangerouslySetInnerHTML={{__html:content}}
        >
        </li>
      </Fragment>
    )
  }

  Delete() {
    const { delet, index } = this.props
    delet(index)
  }

}

TodoItem.propTypes = {
  content: PropTypes.string.isRequired, //isRequired必传
  delet: PropTypes.func,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}


export default TodoItem
