import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Posts from "../pages/Posts";
import Profile from "../pages/Profile";
import Git from "../pages/Git";
import { Layout } from "../components";

const Navigations = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/git" element={<Git />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default Navigations;