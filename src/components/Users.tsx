import { useState } from "react";
import "./styles.css";

import trashIcon from "./assets/trash.png";

type UsersProps = {
  users: string[];
};

export const Users = ({ users }: UsersProps) => {
  const [newUser, setNewUser] = useState("");
  const [list, setList] = useState(users);

  function addNewUser() {
    if (!newUser) return;

    setList((state) => [...state, newUser]);
  }

  function removeUser(user: string) {
    setList((state) => state.filter((item) => user !== item));
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
          <li key={index}>
            {user}
            <button onClick={() => removeUser(user)}>
              <img src={trashIcon} alt="Trash" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
