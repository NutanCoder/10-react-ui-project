import { BrowserRouter, Route, Routes } from "react-router-dom";
import NikeHomePage from "./pages/nike_home_page";
import ProjectHomePage from "./pages/project_home_page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProjectHomePage />} />
        <Route path="/nike-page" element={<NikeHomePage />} />
        {/* <Route path="/contact-page" element={<ContactPage />} /> */}
        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
