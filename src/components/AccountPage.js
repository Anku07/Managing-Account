import React, { useState } from 'react';
import '../styles.css'; 

const Account = () => {
  const [email, setEmail] = useState('user@example.com');
  const [password, setPassword] = useState('password');

  const handleSave = (e) => {
    e.preventDefault();
    // Here you would handle updating the account info
    alert('Account updated');
  };

  return (
    <div className="container">
      <h2>Account Information</h2>
      <form onSubmit={handleSave}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};

export default Account;
