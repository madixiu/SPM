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


function App() {



  return (
    <Router>
      <Routes>

        <Route path="*" element={<NotFound />} /> {/* 404 page */}

        {/* Routes with layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<DocumentForm1 />} />
          <Route path="/document-form-1" element={<DocumentForm1 />} />
          <Route path="/document-form-2-1" element={<DocumentForm21 />} />
          <Route path="/document-form-2-2" element={<DocumentForm22 />} />
          <Route path="/document-form-3-1" element={<DocumentForm31 />} />
          <Route path="/document-form-3-2" element={<DocumentForm32 />} />
          <Route path="/document-form-4-1" element={<DocumentForm41 />} />
          <Route path="/document-form-4-2" element={<DocumentForm42 />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
