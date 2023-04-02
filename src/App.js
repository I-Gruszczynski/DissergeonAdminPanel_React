import "./App.css";
import SideBar from "./SideBar";
import Home from "./Home";
import Stats from "./Stats";
import Create from "./Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tutorial from "./Tutorial";
import BlogDetalis from "./BlogDetails";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SideBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/blog/:id" element={<BlogDetalis />} />
          <Route path="/create" element={<Create />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
