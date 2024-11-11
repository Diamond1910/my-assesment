import React from "react";
import TaskList from "./TaskList";
import UserForm from "./UserForm";


const App = () => {
  return (
    <div className="p-8">
      <TaskList />
      <UserForm />
    </div>
  );
};

export default App;