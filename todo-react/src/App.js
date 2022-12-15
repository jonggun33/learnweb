import './App.css';
import React from 'react'
import {Card, Button, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function ToDo({todo, index, markTodo}){
  return (
    <div className ="todo">
      <span style={{textDecoration:todo.isDone ? "line-through": ""}}>{todo.text}</span>
      <div>
        <Button variant='outline-success' onClick={()=>markTodo(index)}>✓</Button>
        </div>
    </div>
  );
}

function FormTodo({addTodo}){
  const [value, setValue] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  };

  return(
    <div>
      <Form onSubmit = {handleSubmit}>
        <Form.Group>
          <Form.Control type = "text" value={value} onChange={e=>setValue(e.target.value)} />
        </Form.Group>
        <Button varaint='primary mb-3' type='submit'>Submit</Button>
      </Form>
    </div>
  );
}


function App() {
  var loadedTodos =JSON.parse(localStorage.getItem('todos'));
  if(loadedTodos ==null) loadedTodos = [{text:"nothing", isDone:false}];
 
  const [todos, setTodos] = React.useState(
    loadedTodos
    );

  const addTodo = text =>{
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(todos)) ;
  }

  const markTodo = (index)=>{
    const newTodos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(todos)) ;
   
  }

  return (
    <div className="App">
      <div className='container'>
        <h1 className='text-center mb-4'>Todo List</h1>
      <FormTodo addTodo={addTodo}/>
      {
        todos.map((todo, index) => 
        <Card>
          <Card.Body>
          <ToDo 
            todo={todo} 
            index={index} 
            markTodo = {markTodo}

          />
          </Card.Body>
        </Card>
        )
      }
      </div>
    </div>
  );
}
export default App;
