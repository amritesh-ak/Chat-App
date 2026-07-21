import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/Signup';
import SignIn from './components/Signin';
import LandingPage from "./components/landingpage";
import { useState, useEffect } from 'react';


const router = createBrowserRouter([
  { path: "/", 
    element: <LandingPage /> },
  {
    path: "/chat",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
