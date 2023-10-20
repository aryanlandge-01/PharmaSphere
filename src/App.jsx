import { Outlet, createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Medicines from "./Components/Medicines";
import Header from "./Components/Header";
import Sevices from "./Components/Sevices";
import Contact from "./Components/contact";




const App = () => {

  const AppLayout = () => {
    return (
      <div >
        <Header/>
        <Outlet/>   
     
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
          path: "/contact",
          element: <Contact/>
        }
      ]
    },
   
   ])

  return (
    <div className="bg-gradient-to-t from-sky-500 to-cyan-500">
      <RouterProvider router={appRouter}  />
    </div>
  )
}

export default App;