import {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User 1'},
    {rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'User 2'},
    {rowNumber: 3, rowDescription: 'Make dinner', rowAssigned: 'User 3'},
    {rowNumber: 4, rowDescription: 'Charge phone battery', rowAssigned: 'User 4'}
  ])

  const addTodo = (description, assgined) => {
    let rowNumber = 0;
    if(todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
      const newTodo = {
        rowNumber: rowNumber, 
        rowDescription: description, 
        rowAssigned: assgined
      };
      setTodos(todos => [...todos, newTodo]);
    
  }

  const deleteTodo = (deleteRowNumber) => {
    let fileredTodos = todos.filter(todo => todo.rowNumber !== deleteRowNumber);
    setTodos(fileredTodos);
  }

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          <button onClick={() => setShowAddTodoForm(!showAddTodoForm)} className='btn btn-primary'>
            {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
          </button>
          {showAddTodoForm &&
            <NewTodoForm addTodo={addTodo} />
          }
          
        </div>
      </div>     
    </div>
  );
}

export default App;
