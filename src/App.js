import logo from './logo.svg';
import './App.css';


import { createBrowserRouter,
  Route,Routes,
  createRoutesFromElements,
  RouterProvider
  } from 'react-router-dom'
import Home from './Home'
import Getstarted from './Getstarted'
import Login from './Login';
import VideoList from './VideoList';



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        
          <Route index element={<Home />} />
       
       
        <Route path="/Getstarted" element={<Getstarted />} />

        <Route path="/Login" element={<Login/>} />

        <Route path="/videos" element={<VideoList />} />
        
       
        
     
    
      </Route>
    
    )
  );
  return (
   <>
   
   
   <RouterProvider router={router} />
   
   
   </>
  );
}

export default App;
