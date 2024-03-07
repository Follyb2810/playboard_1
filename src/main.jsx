import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './component/shared/Layout'
import { Provider } from 'react-redux'
// import { store } from './store/store.js'
import { CardPage, Coming, CounterDownPage } from './component/pages/index.js'
import LoginPage from './component/pages/Login.jsx'
import  {store}  from './store/Auth.js'


// import { store } from './store/index.js'

const router =createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<App/>} />
    <Route path='/login' element={<LoginPage/>} />
    <Route path='/cart' element={<CardPage/>} />
    <Route path='/count' element={<CounterDownPage/>} />
    <Route path='/coming' element={<Coming/>} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
  </React.StrictMode>,
)
