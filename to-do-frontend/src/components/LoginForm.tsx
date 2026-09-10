import { useState } from "react";

interface Props {
    onLogin: (username: string, password: string) => void;
}
function LoginForm({onLogin}: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: React.FormEvent){
    event.preventDefault();
    onLogin(username,password);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input type="text" 
               value={username}
               onChange={(event)=>setUsername(event.target.value)} />
      </div>

      <div>
        <label>Password</label>
        <input type="password"
               value={password}
               onChange={(event) => setPassword(event.target.value)} />
      </div>

      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm;
