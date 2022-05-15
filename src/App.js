import './App.css';
import ReactDOM from "react-dom/client";
import Navbar from './component/Navbar';
import About from './pages/About';
import Resume from './pages/Resume';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}
export default function App1() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
          <Route path="pages/About" element={<About />} />
          <Route path="pages/Resume" element={<Resume />} />
          <Route path="pages/Blog" element={<Blog />} />
          <Route path="pages/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App1 />);

