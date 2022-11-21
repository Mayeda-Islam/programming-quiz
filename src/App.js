import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import About from './components/About/About';
import Statictis from './components/Statictis/Statictis';
import Blog from './components/Blog/Blog';

function App() {
  const router=createBrowserRouter([
    {path:'/',element:<Main></Main>,
  children:[
    {path:'/',element:<Home></Home>},
    {path:'about',element:<About></About>},
    {path:'statictis',element:<Statictis></Statictis>},
    {path:'blog',element:<Blog></Blog>}
  ]}
  ])
  return (
    <div >

      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
