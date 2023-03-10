import { Link } from 'react-router-dom'

export default function Post({
  id, text, handle, username,
}) {
  return (
    <p key={id}>
      <h3>{username} <Link to={`/${handle}`}>@{handle}</Link></h3>
      {text}
    </p>
  )
}