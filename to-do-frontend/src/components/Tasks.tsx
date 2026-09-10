interface Props {
  items: {
    taskid: number;
    description: string;
    urgency: string;
  }[];
}

function Tasks({ items }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Description</th>
          <th>Urgency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((task) => (
          <tr key={task.taskid}>
            <td>{task.taskid}</td>
            <td>{task.description}</td>
            <td>{task.urgency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Tasks;