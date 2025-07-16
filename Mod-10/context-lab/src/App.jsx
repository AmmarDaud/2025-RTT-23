import { useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts/TodoContext'

function AppContent() {
  return(
    <div>
      <TodoInput />
      <TodoList />
    </div>
  );
}


function App() {

  return (
    <>
    <TodoProvider />
     <h>Todo App</h>
    </>
  )
}

export default App
