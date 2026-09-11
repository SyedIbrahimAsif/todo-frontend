import { useState } from "react";

interface Props {
  onAccept: (messageId: string) => void;
}

function AcceptMessage({ onAccept }: Props) {
  const [messageId, setMessageId] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    onAccept(messageId);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Message ID</label>
        <input
          type="text"
          value={messageId}
          onChange={(e) => setMessageId(e.target.value)}
        />
      </div>

      <button type="submit">Accept Message as Task</button>
    </form>
  );
}

export default AcceptMessage;