import './App.css';
import Nav from './NavBar/Nav';
import React, { useState } from 'react';
import Footer from './NavBar/Footer';
import Todo from './TodoApp/Todo';
import TodosList from './TodoApp/TodosList';

function App() {

  const [todos_list, setTodos_list] = useState([]);

  const listhandler =(title,desc)=>{
    const myTodo={
      title:title,
      desc:desc,
    }
    setTodos_list([...todos_list,myTodo]);
  }

  // const deleteList =(id)=>{
  //   const updateList=todos_list.filter((elem,index)=>{
  //       return todos_list.index !==todos_list.id;
  //   });
  //   setTodos_list([updateList]);
  // };

  const [mode, setMode] = useState('light'); //To enable navbar light or dark mode

  const enablemode = () => {
    if (mode === 'light') {
      setMode('dark');
    }
    else {
      setMode('light');
    }
  }
  return (
    <div className="App">
      <Nav title="React JS" todo_title="Todos App" counter_title="Counter App" mode={mode} toggleMode={enablemode} />
      <div className="container my-5">
        <Todo listhandler={listhandler}/>
        <TodosList todos_list={todos_list}/>             
         {/* deleteList={deleteList} */}
      </div>
      <Footer mode={mode} toggleMode={enablemode} />
    </div>
  );
}

export default App;
