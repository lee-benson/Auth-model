import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import PostDetails from './pages/PostDetails';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <Link to="/">Home</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:handle" element={<Profile />} />
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </>
  );
}

export default App;
