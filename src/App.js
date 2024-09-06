import { BrowserRouter, Route, Routes } from "react-router-dom";
import NikeHomePage from "./pages/nike_home_page";
import ProjectHomePage from "./pages/project_home_page";
import ContactPage from "./pages/contact_page";
import PageNotFound from "./pages/not_found_page";
import FoodyZonePage from "./pages/foody_page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProjectHomePage />} />
        <Route path="/nike-page" element={<NikeHomePage />} />
        <Route path="/contact-page" element={<ContactPage />} />
        <Route path="/foody-zone" element={<FoodyZonePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
