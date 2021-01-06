import React from 'react'
import PropsTypes from 'prop-types'
import TodoItem from './TodoItem'

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}


function TodoList(props) {
    return (
        <ul style = {styles.ul}>
            { props.todos.map((todo, index) => {
                return <TodoItem todo={todo} key={todo.id} index={index} onChange={props.onToggle}></TodoItem>
            }) }
        </ul>
    )
}

TodoList.PropsTypes = {
    todos: PropsTypes.arrayOf(PropsTypes.object).isRequired,
    onToggle: PropsTypes.func.isRequired
}

export default TodoList