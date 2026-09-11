import { useState } from "react";

interface Props {
  onAddTask: (description: string, urgency: string) => void;
}

function AddTask({ onAddTask }: Props) {
  const [description, setDescription] = useState("");
  const [urgency, setUrgency] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    onAddTask(description, urgency);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div>
        <label>Urgency</label>
        <input
          type="text"
          value={urgency}
          onChange={(e) => setUrgency(e.target.value)}
        />
      </div>

      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTask;