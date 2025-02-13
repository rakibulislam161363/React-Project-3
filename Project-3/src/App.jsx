
import Navbars from './component/navbar'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Navbars />}>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
