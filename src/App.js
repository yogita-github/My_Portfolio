import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experiance from './components/Experiance';
import Project from './components/Project';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    
<div>
  <BrowserRouter>
  <Routes>
  <Route index element={<Hero/>}/>
  <Route path='/navbar' element={<NavBar/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/skill' element={<Skills/>}/>
  <Route path='/experience' element={<Experiance/>}/>
  <Route path='/project' element={<Project/>}/>
  
  </Routes>
  </BrowserRouter>
</div>
     
 
     
  );
}


