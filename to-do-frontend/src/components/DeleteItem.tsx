import { useState } from "react";

interface Props {
  onDelete: (id: string) => void;
}

function DeleteItem({ onDelete }: Props) {
  const [id, setId] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    onDelete(id);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID</label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>

      <button type="submit">Delete</button>
    </form>
  );
}

export default DeleteItem;