
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Home from './Pages/Home'
// import About from './Pages/About';
// import Service from './Pages/Services';
// import Contact, { contactFormData } from './Pages/Contact';


import AppLayout from './AppLayout/AppLayout';
import Errorpage from './AppLayout/ErrorPage';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Shop from './Pages/Shop';
import TrainingClasses from './Pages/TrainingClasses';
import NewsArticles from './Pages/NewsArticles';
import GuidedbyMasters from './components/DetailsPages/GuidedMastersDetail';
import ContactUs from './Pages/ContactUs';
import NewsArticleDetail from './components/DetailsPages/NewsArticleDetail';
import GuidedMastersDetail from './components/DetailsPages/GuidedMastersDetail';
import ServiceDetail from './components/DetailsPages/ServiceDetail';
import ShopDetail from './components/DetailsPages/ShopDetail';
import Login from './components/Login/Login';
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
        {
          path: '/login',
          element: <Login/>
       
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/services',
          element: <Services />,
        },
        {
          path: '/services/:id',
          element: <ServiceDetail />,
        },
        {
          path: '/shop',
          element: <Shop />,
        },
        {
          path: '/shop/:id',
          element: <ShopDetail />,
        },
        {
          path: '/training-classes',
          element: <TrainingClasses />,
          // loader: getApi
        },
        {
          path: '/news-articles',
          element: <NewsArticles />,
        },
        {
          path: '/news-articles/:id',
          element: <NewsArticleDetail />,
        },
        {
          path: '/guided-by-masters',
          element: <GuidedMastersDetail />,
  
        },
        {
          path: '/contact',
          element: <ContactUs />,
          // action: contactFormData

        },
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
