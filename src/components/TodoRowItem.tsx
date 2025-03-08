import React from "react";

export const TodoRowItem: React.FC<{
    rowNumber: number, 
    rowDescription: string, 
    rowAssigned: string, 
    deleteTodo: Function
}> = (props) => {

    const {rowNumber, rowDescription, rowAssigned} = props;
    return(
        <tr onClick={() => props.deleteTodo(rowNumber)}>
            <th scope='row'>{rowNumber}</th>
            <th>{rowDescription}</th>
            <th>{rowAssigned}</th>
        </tr>
    )
}   
