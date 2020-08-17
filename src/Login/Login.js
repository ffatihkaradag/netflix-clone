import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
function Login() {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div
      className="login"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/63a8bbf4-b1ea-4adf-96e2-264486599178/42259f43-e2c2-4134-af74-6dc58a2ee973/TR-en-20200810-popsignuptwoweeks-perspective_alpha_website_small.jpg")`
      }}
    >
      <div className="loginsc">
        <Link to="/">
          <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
            alt="Netflix Logo"
          />
        </Link>
        <h1>Sign In</h1>
        <form>
          <h5 className="logintext">E-mail</h5>
          <input
            className="logininp"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <h5 className="logintext">Password</h5>
          <input
            className="logininp"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button className=" login-button" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
