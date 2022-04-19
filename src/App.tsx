import "./App.css";
import { Users } from "./components/Users";

export default function App() {
  const users = ["Davi", "Jhon"];

  return (
    <div className="App">
      <h1>Hello World Testing</h1>

      <Users users={users} />
    </div>
  );
}
