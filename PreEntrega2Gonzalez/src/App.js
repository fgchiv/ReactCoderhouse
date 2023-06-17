import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* import AboutPage from "./pages/AboutPage/AboutPage";
import BlogPage from "./pages/BlogPage/BlogPage"; */
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartDetail from './pages/CartDetail/CartDetail';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar ></Navbar>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
{/*           <Route path="/about" element={<AboutPage/>} />
          <Route path="/blog" element={<BlogPage/>} /> */}
          <Route path="/cart" element={<CartDetail/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path="/category/:catId" element={<ItemListContainer/>} />
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
