import Nav from './components/Nav.jsx';
import Home from './screens/Home.jsx';
import Cats from './screens/Cats.jsx';
import CatDetails from './screens/CatDetails.jsx';
import CatCreate from './screens/CatCreate.jsx';
import CatEdit from './screens/CatEdit.jsx';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/cats/:id" element={<CatDetails />} />
        <Route path="/add-cat" element={<CatCreate />} />
        <Route path="/cats/:id/edit" element={<CatEdit />} />
      </Routes>
    </div>
  );
}

export default App;
