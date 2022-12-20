import React from 'react';

export default function Forms() {
    return (
        <div>
            <div className="loginsignup">
                <p>Login | Signup</p>
                    <div className="login">
                        <h3>Login</h3>
                        <form>
                            <p>Email:</p>
                            <input
                            name="email"
                            type="email"
                            />
                            <p>Password:</p>
                            <input
                            name="password"
                            type="password"
                            />
                            <br></br>
                            <button type="button">Login</button>  
                            </form>
                    </div>
                    <div className="signup">
                        <form>
                            <p>First name:</p>
                            <input
                            name="firstname"
                            type="text"
                            />
                            <p>Last name:</p>
                            <input
                            name="lasname"
                            type="text"
                            />  
                            <p>Password:</p>
                            <input
                            name="password"
                            type="password"
                            />
                            <p>Email:</p>
                            <input
                            name="email"
                            type="email"
                            />
                            <br></br>
                            <button type="button">Login</button>  
                        </form>
                    </div>
            </div>
        </div>
    )
}