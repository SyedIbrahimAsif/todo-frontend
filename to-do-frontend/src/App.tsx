import { useState } from "react";
import Tasks from "./components/Tasks";
import Messages from "./components/Messages";
import LoginForm from "./components/LoginForm";


function App() {
  function handleLogin(username: string, password: string) {
    console.log(username);
    console.log(password);
  }

  return (
    <>
      <Tasks items={tasks} />
      <Messages items={msgs} />
      <LoginForm onLogin={handleLogin}/>
    </>
  );
}

export default App;
