
import './App.css';
// import { createBrowserRouter } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Products from './Components/Products/Products';
import Main from './Layout/main'
import Friends from './Components/Friends/Friends';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/home', element: <Home></Home> },
        { path: '/about', element: <About></About> },
        { path: '/products', element: <Products></Products> },
        { path: '/friends', element: <Friends></Friends> }
      ]
    }

  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
