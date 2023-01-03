import React from "react";
import Auth from '../util/auth';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../util/mutations'

export default function Login() {
  const [login] = useMutation(LOGIN_USER)
  return (
    // line 15 click event to request to server
    // userMutation hook bec
    // 

    <div>
      <div className="login">
        <h3>Login</h3>
        <form>
          <p>Email:</p>
          <input
            name="email"
            type="email"
            className="inputbox"
            onChange={handleChange} />
          <p>Password:</p>
          <input
            name="password"
            type="password"
            className="inputbox"
            onChange={handleChange} />
          <br></br>
          <button
            type="button"
            className="submitbuttons">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}