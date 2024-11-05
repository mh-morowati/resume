import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "../pages/project";
import Layout from "../pages/layout";
import Home from "../pages/home";
import AboutMe from "../pages/aboutMe";
import NoPage from "../pages/noPage";




function App() {
    return (   <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about-me" element={<AboutMe />} />
            <Route path="project" element={<Project />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter> );
}

export default App;