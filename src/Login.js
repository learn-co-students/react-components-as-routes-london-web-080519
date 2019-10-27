import React, {Component} from 'react';

class Login extends React.Component {
    render() {
        return (
          <form>
            <h1>Login</h1>
            <div>
              <input type="text" name="username" placeholder="Username" />
              <label htmlFor="username"></label>
            </div>
            <div>
              <input type="password" name="password" placeholder="Password" />
              <label htmlFor="password"></label>
            </div>
            <input type="submit" value="Login" />
          </form>
        );
      }
}

export default Login;