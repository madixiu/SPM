import Layout from "./components/Layout/Layout"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DocumentForm1 from "./components/Forms/DocumentForm1";
import DocumentForm21 from "./components/Forms/DocumentForm21";
import DocumentForm22 from "./components/Forms/DocumentForm22";
import DocumentForm31 from "./components/Forms/DocumentForm31";
import DocumentForm32 from "./components/Forms/DocumentForm32";
import DocumentForm41 from "./components/Forms/DocumentForm41";
import DocumentForm42 from "./components/Forms/DocumentForm42";
import NotFound from "./pages/NotFound";
import Pages from "./pages/Pages";

function App() {


  return (
    <Router>
      <Routes>

        <Route path="*" element={<NotFound />} /> {/* 404 page */}

        {/* Routes with layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Pages><DocumentForm1 /></Pages>} />
          <Route path="/document-form-1" element={<Pages><DocumentForm1 /></Pages>} />
          <Route path="/document-form-2-1" element={<Pages><DocumentForm21 /></Pages>} />
          <Route path="/document-form-2-2" element={<Pages><DocumentForm22 /></Pages>} />
          <Route path="/document-form-3-1" element={<Pages><DocumentForm31 /></Pages>} />
          <Route path="/document-form-3-2" element={<Pages><DocumentForm32 /></Pages>} />
          <Route path="/document-form-4-1" element={<Pages><DocumentForm41 /></Pages>} />
          <Route path="/document-form-4-2" element={<Pages><DocumentForm42 /></Pages>} />



          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
