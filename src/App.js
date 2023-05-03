import './App.css';
import Chat from './pages/Chat';
import Index from './pages/Index';
import {Routes,Route} from 'react-router-dom'
import Talk from './pages/Talk';
import Live from './pages/Live';
import Blog from './pages/Blog';
import Contact from './pages/Contact';


function App() {
  return (
    <>
   
    <Routes>
      <Route path="/" element={<><Index/></>}/>
      <Route path="/chat" element={<><Chat/></>}/>
      <Route path='/talk' element={<><Talk/></>}/>
      <Route path='/live' element={<><Live/></>}/>
      <Route path='/blog' element={<><Blog/></>}/>
      <Route path='/contact' element={<><Contact/></>}/>
    </Routes>
    </>
  );
}

export default App;
