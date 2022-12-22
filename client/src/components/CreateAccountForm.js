import React from "react";

import { Container, Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Forms() {
  return (
    <div className="loginsignuppage">
      <div className="loginsignup">
        <Container className="container">
          <Tabs className="justify-content-center logintabs border-bottom-0">
            <Tab eventKey="login" title="Login" className="tabsfont">
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
            </Tab>
            <Tab eventKey="signup" title="Sign up" className="tabsfont">
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
            </Tab>
          </Tabs>
        </Container>
      </div>
    </div>
  );
}
