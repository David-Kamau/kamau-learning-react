import React, { Fragment } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import ErrorBoundary from './routes/ErrorBoundary'
import NotFound from './routes/NotFound'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<ErrorBoundary />} />
      <Route path="/about" element={<About />} errorElement={<ErrorBoundary />} />
      <Route path="*" element={<NotFound />} errorElement={<ErrorBoundary />} />
    </>
  )
)

const Routes = () => {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  )
}

export default Routes