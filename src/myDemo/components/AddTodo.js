import React, {Component, PropTypes} from 'react'

class AddTodo extends Component {
    render() {
        let input;
        return (
            <div>
                <input ref="input" type="text"/>
                <button
                    onClick={(e) => this.handleClick(e)}
                    type="button">添加
                </button>
            </div>
        )
    }

    handleClick(e) {
        const node = this.refs.input;
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = '';
    }
}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
}

export default AddTodo
