import EditImage from "../assets/edit.png";
import DeleteImage from "../assets/delete.png";
import { Features } from "./Features";

export function DisplayItems({ users, handleDelete, handleEdit, handleNameSort }) {
  return (
    <div className="add-list">
      <h1>Display the User data</h1>
      <Features handleNameSort={handleNameSort} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th style={{ border: "none" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td className="btn-flex" style={{ border: "none" }}>
                <button onClick={() => handleEdit(user)}><img src={EditImage} className="edit" alt="" /></button>
                <button onClick={() => handleDelete(user.id)}><img src={DeleteImage} className="delete" alt="" /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
