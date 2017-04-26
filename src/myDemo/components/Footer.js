import React, {Component} from 'react'

export default class Footer extends Component {
  // 渲染条件Links      这拆的更细了，又整一个li里的a标签出来
  renderFilter(filter, name) {
    if (filter === this.props.filter) {
      return name;
    }

    return (
      <a href='#' onClick={e => {
        this.props.onFilterChange(filter);
        e.preventDefault();
      }}>
        {name}
      </a>
    )
  }

  render() {
    return (
      <div className='filter'>
        <p>
          展示 :
          {' '}
          {this.renderFilter('SHOW_ALL', '全部')}
          {' | '}
          {this.renderFilter('SHOW_COMPLETED', '已完成')}
          {' | '}
          {this.renderFilter('SHOW_ACTIVE', '未完成')}
        </p>
      </div>
    )
  }
}
