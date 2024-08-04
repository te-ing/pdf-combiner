import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import PdfCombiner from '../component/PdfCombiner';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PdfCombiner />} />
      </Routes>
    </Router>
  );
}
