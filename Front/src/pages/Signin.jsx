import { useState } from "react";
import { Link } from "react-router-dom";
import { signin } from '../api/users'

export default function Signin() {
  const [text, setText] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const response = await signin(text, password)
    console.log(response);
  }

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button>Signin</button>
      </form>
      <span>
        {'Already a twuuterer? '}
        <Link to="/auth/signup">Go to Signup</Link>
        {' instead.'}
      </span>
    </div>
  )
}