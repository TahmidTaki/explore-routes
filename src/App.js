
import './App.css';
// import { createBrowserRouter } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <div>This is base home page</div> },
    { path: '/home', element: <div>Home Page</div> },
    { path: '/about', element: <div>About Page</div> }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
