import { useState } from "react";

export function EditItem({ user, setName, setPhone, setEmail, handleSubmit }) {
  const [nameBuffer, setNameBuffer] = useState(user.name);
  const [phoneBuffer, setPhoneBuffer] = useState(user.phone);
  const [emailBuffer, setEmailBuffer] = useState(user.email);

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setNameBuffer(newName);
    setName(newName);
  };

  const handlePhoneChange = (e) => {
    const newPhone = e.target.value;
    setPhoneBuffer(newPhone);
    setPhone(newPhone);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmailBuffer(newEmail);
    setEmail(newEmail);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className="add-list">
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-content">
          <label>Name:</label>
          <input type="text" value={nameBuffer} onChange={handleNameChange} onKeyDown={handleKeyDown} />
        </div>
        <div className="form-content">
          <label>Phone No:</label>
          <input type="tel" value={phoneBuffer} onChange={handlePhoneChange} onKeyDown={handleKeyDown} />
        </div>
        <div className="form-content">
          <label>Email Id</label>
          <input type="email" value={emailBuffer} onChange={handleEmailChange} onKeyDown={handleKeyDown} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
