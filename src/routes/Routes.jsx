import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Blog from "../Pages/Blog/Blog";
import Chef from "../Pages/Home/Chef/Chef";
import ChefCard from "../Pages/Home/Chef/ChefCard";
import ChefDetails from "../Pages/Home/Chef/ChefDetails";
import ChefDetail from "../Pages/Home/Chef/ChefDetail";
import ErrorPage from "../ErrorPage/ErrorPage";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path: '/blog',
        element:<Blog></Blog>
      },
   
    ]
  },

  {
    path: 'chef/:id',
    errorElement: <ErrorPage></ErrorPage>,
    element : <ChefDetails></ChefDetails>,
    loader: ({ params }) => fetch(`https://y-muntasirmoin.vercel.app/chef/${params.id}`)
    // children:[
    //   {
    //     path: ':id',
    //     element:<ChefDetail></ChefDetail>,
    //     loader: ({ params }) => fetch(`http://localhost:5001/chef/${params.id}`)
    //   }
    // ]
  }

]);

export default router;