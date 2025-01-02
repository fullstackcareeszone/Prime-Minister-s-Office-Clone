import "./App.css";
import PhotoGallery from "./components/PhotoGallery";
import ContactUs from "./components/ContactUs";
import PM from "./components/PM";
import Home from "./components/Home"
import PMReliefFund from "./components/PMReliefFund"
import { createBrowserRouter, RouterProvider } from "react-router-dom";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/> 
      
    },
    {
      path: "/PhotoGallery",
      element: <PhotoGallery/>
    },
    {
      path: "/ContactUs",
      element: <ContactUs/>
    },
    {
      path: "/PM",
      element: <PM/>
    },
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/PhotoGallery",
      element: <PhotoGallery/>
    },
    {
      path: "/PMReliefFund",
      element: <PMReliefFund/>
    },

  ])
  return (
   
    <>
     <RouterProvider router={router}/>
    </>
  );
}

export default App;
