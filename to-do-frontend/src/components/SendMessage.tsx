import { useState } from "react";

interface Props {
  onSendMessage: (
    description: string,
    urgency: string,
    receiver: string
  ) => void;
}

function SendMessage({ onSendMessage }: Props) {
  const [description, setDescription] = useState("");
  const [urgency, setUrgency] = useState("");
  const [receiver, setReceiver] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    onSendMessage(description, urgency, receiver);
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

      <div>
        <label>Receiver</label>
        <input
          type="text"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
        />
      </div>

      <button type="submit">Send Message</button>
    </form>
  );
}

export default SendMessage;