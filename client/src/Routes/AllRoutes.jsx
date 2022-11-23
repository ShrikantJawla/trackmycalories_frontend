import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard'
import LoginPage from '../pages/LoginPage'
import SearchPage from '../pages/SearchPage'
import SignupPage from '../pages/SignupPage'
import Tasks from '../pages/Tasks'
import UserProfile from '../pages/UserProfile.jsx'
import AuthRoute from '../Routes/AuthRoute'

const routes = [
  {
    path: '/',
    element: (
      <AuthRoute>
        <Dashboard />
      </AuthRoute>
    ),
  },
  {
    path: '/searchproducts',
    element: (
      <AuthRoute>
        <SearchPage />
      </AuthRoute>
    ),
  },
  { path: '/tasks', element: <Tasks /> },
  {
    path: '/userprofile',
    element: (
      <AuthRoute>
        <UserProfile />
      </AuthRoute>
    ),
  },
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SignupPage /> },
]
const AllRoutes = () => {
  return (
    <Routes>
      {routes.map(({ path, element }, ind) => (
        <Route
          key={`${ind}+${path}+${Math.random()}`}
          path={path}
          element={element}
        />
      ))}
    </Routes>
  )
}

export default AllRoutes
