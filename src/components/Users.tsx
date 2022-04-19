import { useState } from "react";
import "./styles.css";

type UsersProps = {
  users: string[];
};

// const users = [
//   { id: 1, name: "Davi" },
//   { id: 2, name: "Jhon" },
//   { id: 3, name: "Steve" },
// ];

export const Users = ({ users }: UsersProps) => {
  const [newUser, setNewUser] = useState("");
  const [list, setList] = useState(users);

  function addNewUser() {
    setTimeout(() => {
      setList((state) => [...state, newUser]);
    });
  }

  return (
    <div className="users">
      <div className="add">
        <input
          type="text"
          placeholder="Write here"
          onChange={(e) => setNewUser(e.target.value)}
        />

        <button onClick={addNewUser}>Add</button>
      </div>

      <ul>
        {list.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};
