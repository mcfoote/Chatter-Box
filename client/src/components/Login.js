import React from "react";

export default function Login() {
  return (
    <div>
      <div className="login">
        <h3>Login</h3>
        <form>
          <p>Email:</p>
          <input name="email" type="email" className="inputbox" />
          <p>Password:</p>
          <input name="password" type="password" className="inputbox" />
          <br></br>
          <button type="button" className="submitbuttons">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}