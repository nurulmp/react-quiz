import { useEffect, useState } from "react";
import Classes from "../../styles/UserCard.module.css";

function Users() {
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setUsers(json));
  }, []);

  const handelDelte = (id) => {
    const deleteUser = users.filter((user) => user.id !== id);
    setUsers(deleteUser);
  };
  const resetForm = () => {
    setTitle("");
    setBody("");
    setEditId(null);
  };
  const handelEdit = (id) => {
    const userEdit = users.find((user) => user.id === id);
    setEditId(id);
    setTitle(userEdit.title);
    setBody(userEdit.body);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${editId}`, {
        method: "PUT",
        body: JSON.stringify({
          id: editId,
          title,
          body,
        }),
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(users);
          const updatUsers = users.map((user) =>
            user.id === editId ? data : user
          );
          setUsers(updatUsers);
          resetForm();
        });
    } else {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          body,
        }),
        headers: {
          "content-type": "application/json;charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Posted:", data);
          setUsers([...users, data]);
          resetForm();
        });
    }
  };

  return (
    <div className={Classes.usercontainer}>
      <form className="input-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Post Title"
            value={title}
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            value={body}
            name="body"
            onChange={(e) => setBody(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <button type="submit">{editId ? "Update" : "Add"}</button>
        </div>
      </form>
      {users.map((user) => (
        <div key={user.id} className={Classes.card}>
          <div className={Classes.actions}>
            <button
              className={Classes.edit}
              onClick={() => handelEdit(user.id)}
            >
              edit
            </button>
            <button
              className={Classes.delete}
              onClick={() => handelDelte(user.id)}
            >
              delete
            </button>
          </div>
          <h2 className={Classes.title}>{user.title}</h2>
          <p className={Classes.body}>{user.body}</p>
        </div>
      ))}
    </div>
  );
}
export default Users;
