import React from "react";

export default function signup() {
  return (
    <div>
      <div className="signup">
        <form>
          <p>First name:</p>
          <input name="firstname" type="text" className="inputbox" />
          <p>Last name:</p>
          <input name="lasname" type="text" className="inputbox" />
          <p>Password:</p>
          <input name="password" type="password" className="inputbox" />
          <p>Email:</p>
          <input name="email" type="email" className="inputbox" />
          <br></br>
          <button type="button" className="submitbuttons">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
