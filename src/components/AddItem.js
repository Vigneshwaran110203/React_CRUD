 export function AddItem({ name, phone, email, setName, setPhone, setEmail, handleSubmit }) {
  return (
    <div className="add-list">
      <h1>Add List</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-content">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-content">
          <label>Phone No:</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="form-content">
          <label>Email Id</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
