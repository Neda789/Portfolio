import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import Project01 from "./pages/projects/Project01";
import Project02 from "./pages/projects/Project02";
import Project03 from "./pages/projects/Project03";
import Project04 from "./pages/projects/Project04";
import Project05 from "./pages/projects/Project05";
import Project06 from "./pages/projects/Project06";
import Project07 from "./pages/projects/Project07";
import Project08 from "./pages/projects/Project08";
import Project09 from "./pages/projects/Project09";
import Project10 from "./pages/projects/Project10";
import Project11 from "./pages/projects/Project11";
import Project12 from "./pages/projects/Project12";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/o-meni" element={<About />} />
        <Route path="/projekti" element={<Projects />} />
        <Route path="/projekti/01" element={<Project01 />} />
        <Route path="/projekti/02" element={<Project02 />} />
        <Route path="/projekti/03" element={<Project03 />} />
        <Route path="/projekti/04" element={<Project04 />} />
        <Route path="/projekti/05" element={<Project05 />} />
        <Route path="/projekti/06" element={<Project06 />} />
        <Route path="/projekti/07" element={<Project07 />} />
        <Route path="/projekti/08" element={<Project08 />} />
        <Route path="/projekti/09" element={<Project09 />} />
        <Route path="/projekti/10" element={<Project10 />} />
        <Route path="/projekti/11" element={<Project11 />} />
        <Route path="/projekti/12" element={<Project12 />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
