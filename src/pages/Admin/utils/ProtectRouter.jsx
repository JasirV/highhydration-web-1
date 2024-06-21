import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
const AdminProtectRouter = () => {
  const admin = localStorage.getItem("admin_token")
  return admin  ? <Outlet/> : <Navigate to="/userlogin"/>
}

export default AdminProtectRouter

