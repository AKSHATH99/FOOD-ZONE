import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
// import Header from './components/Header';
import Home from "./components/Home";
import About from "./components/About";
import Menu from './components/Menu';
import Cart from './components/Cart';
import Contact from './components/Contact';
import { Provider } from 'react-redux';
import store from './Utils/store';
import PartyOrder from './components/PartyOrder';


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"/",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path:"/menu",
        element:<Menu/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/party",
        element:<PartyOrder/>
      },
      {
        path:"/contact",
        element:<Contact/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={appRouter}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RouterProvider>
 
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
