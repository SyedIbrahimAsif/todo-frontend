interface Props {
  items: {
    messageId: number;
    description: string;
    urgency: string;
    sender: string;
  }[];
}

function Messages({ items }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Message ID</th>
          <th>Description</th>
          <th>Urgency</th>
          <th>Sender</th>
        </tr>
      </thead>

      <tbody>
        {items.map((message) => (
          <tr key={message.messageId}>
            <td>{message.messageId}</td>
            <td>{message.description}</td>
            <td>{message.urgency}</td>
            <td>{message.sender}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Messages;
