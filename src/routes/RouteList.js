import Projects from '../pages/Projects.js';
import Contact from '../pages/Contact.js';
import Courses from '../pages/Courses.js';
import Skills from '../pages/Skills.js';
import {Navigate, Route, Routes} from 'react-router-dom';

const RouteList = () => {
    return (
        <Routes>
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/skills" element={<Skills />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/courses" element={<Courses />} />
            <Route path="*" element={<Navigate to="/contact" />} />
        </Routes>
    );
};
export default RouteList;
