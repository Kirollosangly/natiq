import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Natiq from './components/natiq/Natiq';
import Layout from './components/layout/Layout';
import Error from './components/not-found/Error';

const router = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'natiq', element: <Natiq /> },
      { path: '*', element: <Error /> },
    ]
  }
])

function App() {
  return <>
    <RouterProvider router={router} />
  </>
}

export default App;
