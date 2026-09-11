import Tasks from "./components/Tasks";
import Messages from "./components/Messages";
import Form from "./components/Form"
import AddTask from "./components/AddTask";
import SendMessage from "./components/SendMessage";
import DeleteItem from "./components/DeleteItem";
import AcceptMessage from "./components/AcceptMessage";

function App() {
  function handleLogin(username: string, password: string) {
    console.log(username);
    console.log(password);
  }
  function handleSignup(username: string, password: string) {
    console.log(username);
    console.log(password);
  }
  function handleAddTask(description: string, urgency: string) {
    console.log(description);
    console.log(urgency);
  }
  function handleSendMessage(
  description: string,
  urgency: string,
  receiver: string
) {
  console.log(description);
  console.log(urgency);
  console.log(receiver);
}
function handleDeleteTask(id: string) {
  console.log("Delete task:", id);
}
function handleDeleteMessage(id: string) {
  console.log("Delete message:", id);
}
function handleAcceptMessage(messageId: string) {
  console.log("Accept message:", messageId);
}

  return (
    <>
      <Form onSubmit={handleLogin}/>
      <Form onSubmit={handleSignup}/>
      <AddTask onAddTask={handleAddTask} />
      <SendMessage onSendMessage={handleSendMessage} />
      <DeleteItem onDelete={handleDeleteTask} />
      <DeleteItem onDelete={handleDeleteMessage} />
      <AcceptMessage onAccept={handleAcceptMessage} />
    </>
  );
}

export default App;
