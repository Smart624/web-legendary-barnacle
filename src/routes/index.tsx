import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/not-found";
import About from "../pages/about";
import Tasks from "../pages/tasks";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
