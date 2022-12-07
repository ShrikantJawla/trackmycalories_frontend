import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AdminPrivateRoute = ({ children }) => {
  const { isAdmin } = useSelector((state) => state.auth)
  if (!isAdmin) return <Navigate to="/login" />
  return children
}

export default AdminPrivateRoute
