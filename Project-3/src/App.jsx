
import Navbars from './component/navbar'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router';
import All from './component/allpage/All';
import Restaurants from './component/allpage/Restaurants';
function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Navbars />}>
          <Route path="/All" element={<All />} />
          <Route path="/Restaurants" element={<Restaurants /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
