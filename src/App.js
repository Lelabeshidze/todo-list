// import logo from './logo.svg';
// import './App.css';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

// // 1
// import React from 'react'

// import NewTaskForm from './NewTaskForm'
// import TaskList from './TaskList'

// function App() {
//   // 2
//   return (
//     <div className="container">
//       <h1 className="title">Todo List</h1>
//       <NewTaskForm />
//       <TaskList />
//     </div>
//   )
// }

// export default App;
import './App.css';
import Form from "./Form";

function App() {
  return (
    <div className="wrapper">
      <h1>Todo List</h1>
      <Form/>
    </div>
  );
}

export default App;