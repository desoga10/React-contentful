import './App.css';
import BlogList from './Blog/BlogList';
import SingleBlog from './Blog/SingleBlog';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/blogDetails/:id" element={<SingleBlog />} />
        <Route path="/blogList" element={<BlogList />} />
        <Route path="/" element={<BlogList />} />
      </Routes>
    </Router>
  );
}

export default App;
