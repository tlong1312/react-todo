import TodoRowItem  from './TodoRowItem';
const TodoTable = (props) => {
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

export default TodoTable;