import { Outlet, createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Medicines from "./Components/Medicines";
import Header from "./Components/Header";
import Sevices from "./Components/Sevices";
import LoginForm from "./Components/LoginForm";
import Footer from "./Components/Footer";
import Productpage from "./Components/Productpage";
import Cart from "./Components/Cart";




const App = () => {

  const AppLayout = () => {
    return (
      <div >
        <Header/>
        <Outlet/>   
        <Footer/>
      </div>
    )
  }

   const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/medicines",
          element: <Medicines/>,
        },
        {
          path: "/sevices",
          element: <Sevices/>,
        },
        {
          path: "/cart",
          element: <Cart/>
        },
        {
          path: "/login",
          element: <LoginForm/>
        },
        {
          path: "/product/:proId",
          element: <Productpage/>
        }
      ]
    },
   
   ])

  return (
    <div className="bg-gradient-to-t from-sky-500 to-cyan-500 ">
      <RouterProvider router={appRouter}  />
    </div>
  )
}

export default App;
