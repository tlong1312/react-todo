const TodoRowItem = (props) => {

    const {rowNumber, rowDescription, rowAssigned} = props;
    return(
        <tr onClick={() => props.deleteTodo(rowNumber)}>
            <th scope='row'>{rowNumber}</th>
            <th>{rowDescription}</th>
            <th>{rowAssigned}</th>
        </tr>
    )
}   

export default TodoRowItem;