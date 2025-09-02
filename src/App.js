
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Home from './Pages/Home'
// import About from './Pages/About';
// import Service from './Pages/Services';
// import Contact, { contactFormData } from './Pages/Contact';


import AppLayout from './Layout/AppLayout';
import Errorpage from './Layout/ErrorPage';
import Home from './Pages/Home';
// import ServiceDetail from './Pages/ServiceInnerPages/ServiceDetail';
// import { getApi } from './API/GetApi';
// import { ProductDetail } from './Components/UI/ProductDetail';
// import { singleItem } from './API/SingleProductAPI';


function App() {
  const myRouter = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <Errorpage/>,
      children: [
        {
          path: '/',
          element: <Home/>
       
        },
        // {
        //   path: '/about',
        //   element: <About />
        // },
        // {
        //   path: '/service',
        //   element: <Service />,
        //   loader: getApi
        // },
        // {
        //   path: '/contact',
        //   element: <Contact />,
        //   action: contactFormData

        // },
        // {
        //   path: '/service/servicedtail',
        //   element: <ServiceDetail/>
        //           },
        // {
        //   path: '/service/:detailID',
        //   element: <ProductDetail/>,
        //   loader: singleItem
        //   },
      ]
    },

  ]);
  return <RouterProvider router={myRouter} />
}
export default App
