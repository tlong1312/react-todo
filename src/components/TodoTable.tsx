import React from 'react';
import { TodoRowItem }  from './TodoRowItem';
export const TodoTable:React.FC<{
    todos: TodoModel[], 
    deleteTodo: Function
}> = (props) => {
    const {todos} = props;
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Assgined</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo, index) => {
                    return <TodoRowItem 
                        key={index} 
                        rowNumber={todo.rowNumber} 
                        rowDescription={todo.rowDescription} 
                        rowAssigned={todo.rowAssigned} 
                        deleteTodo={props.deleteTodo}
                    />
                })}
            </tbody>
        </table>
    )
}
