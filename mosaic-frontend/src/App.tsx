import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/LoginPage.tsx'
import Register from './pages/Register'
import Profile from './pages/Profile'
import PostPage from './pages/PostPage'
import CreatePost from './pages/CreatePost'
import Admin from './pages/Admin'
import {ProtectedRoute} from './components/ProtectedRoute'
import MainLayout from "./layouts/MainLayout.tsx";
import AuthLayout from "./layouts/AuthLayout.tsx";

export default function App() {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/posts/:id" element={<PostPage/>}/>
                <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
                <Route path="/create" element={<ProtectedRoute><CreatePost/></ProtectedRoute>}/>
                <Route path="/admin" element={<ProtectedRoute><Admin/></ProtectedRoute>}/>
            </Route>
            <Route element={<AuthLayout/>}>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Route>
        </Routes>
    )
}