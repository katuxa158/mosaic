import { Navigate } from 'react-router-dom'
import { isAuth } from '../store/auth'

export const ProtectedRoute = ({ children }: any) => {
  return isAuth() ? children : <Navigate to="/login" />
}