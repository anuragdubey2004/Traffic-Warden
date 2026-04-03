import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';


const App = () => {
  return (
    <Routes>

      <Route path='/' element={<Home/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>

    </Routes>
  )
};

export default App;
