import React from "react";

export default function AccountSettings() {
  return (
    <div className="settings">
      <div className="settingsnavbar">
        <h3>User's name</h3>
        <ul>
          <li>
            <a href="/">Back to home</a>
          </li>
        </ul>
      </div>
      <div className="settingspagemain">
        <h3>Account Settings</h3>
        <div className="settingsbox">
          <form>
            <h4>Edit Acount Info</h4>
            <p>Edit First name:</p>
            <input name="firstname" type="text" className="inputbox" />
            <p>Edit last name:</p>
            <input name="lastname" type="text" className="inputbox" />
            <p> Edit Email:</p>
            <input name="email" type="email" className="inputbox" />
            <p>Change Password</p>
            <input name="password" type="password" className="inputbox" />
            <br></br>
            <button type="button" className="submitbuttons">
              Confirm changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
