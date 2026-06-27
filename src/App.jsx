import {  HashRouter } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from './context/ColorContext'
import AdminLayout from './layouts/AdminLayout'
import UserLayout from './layouts/UserLayout'
import AppRoutes from './routes/Routes'
import ButtonColor from './UI/ButtonColor'
import { AuthProvider } from './context/AuthContext'
function App() {

  return (
    <>
    <AuthProvider>
      <ThemeProvider>
        <HashRouter >
          <AppRoutes />
        </HashRouter>
      </ThemeProvider>
    </AuthProvider>
    </>
  )
}

export default App
